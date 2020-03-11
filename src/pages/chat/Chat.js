import React, { useContext } from 'react';

import { SocketContext } from '../../Socket';

const Chat = () => {
  const socket = useContext(SocketContext);

  const sendMessage = (message) => {
    socket.emit('message', message);
  };

  return <div>Hello</div>;
};

export default Chat;
