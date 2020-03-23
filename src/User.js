import React from 'react';

export const UserContext = React.createContext(null);

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <UserContext.Provider value={{ info: this.state.user, setUser: this.setUser }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default User;
