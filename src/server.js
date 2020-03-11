const polka = require('polka');
const io = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const createState = require('state-watcher');

const PORT = process.env.PORT || 8080;

const server = http.createServer();

const [state, watcher] = createState({
  users: [],
});

polka({ server })
  .use(cors(), bodyParser.json())
  .post('/users', (req, res) => {
    state.users = [...state.users, req.body.data.attributes];
    res.end();
  })
  .listen(PORT, () => console.log(`💬 Starting chat server on port: ${PORT}`));

io(server).on('connection', (sock) => {
  console.log('🦄');

  sock.on('message', (data) => {
    console.log(data);
    sock.broadcast.emit('message', data);
  });

  watcher.on('change', ['users'], (state, user) => {
    sock.broadcast.emit('user added', user[user.length - 1]);
    sock.username = user.username;
  });

  sock.on('disconnect', () => {
    sock.broadcast.emit('leave', sock.username);
  });
});
