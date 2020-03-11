import React from 'react';
import io from 'socket.io-client';

export const SocketContext = React.createContext(null);

class Socket extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:8080');
  }

  render() {
    const { children } = this.props;

    return <SocketContext.Provider value={this.socket}>{children}</SocketContext.Provider>;
  }
}

export default Socket;
