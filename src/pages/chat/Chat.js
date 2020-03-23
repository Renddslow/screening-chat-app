import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { SocketContext } from '../../Socket';
import { UserContext } from '../../User';

const Chat = () => {
  const socket = useContext(SocketContext);
  const user = useContext(UserContext);

  const sendMessage = (message) => {
    socket.emit('message', { message, user: user.info });
  };

  if (!user.info || !user.info.username) {
    return <Redirect to="login" />;
  }

  return <div>Hello</div>;
};

export default Chat;
