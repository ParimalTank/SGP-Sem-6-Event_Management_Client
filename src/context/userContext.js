import { createContext, Component } from "react";

export const UserContext = createContext();

const initialState = {
  email: "user@mail.com",
  firstName: "user",
  lastName: "name",
  token: 'asdasdadsa'
};

class UserContextProvider extends Component {
  state = initialState;

  login = (data) => {
    this.setState({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      token: data.token
    });
  };

  logout = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <UserContext.Provider value={{ user: this.state, login: this.login, logout: this.logout }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider