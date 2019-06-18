import React from "react";
import { Trail } from "react-spring/renderprops";

class App extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => this.setState({ users: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <h1>Random User</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <Trail
            items={users}
            keys={user => user.id}
            from={{
              marginLeft: -20,
              opacity: 0,
              transform: "translate3d(0,-40px,0"
            }}
            to={{
              marginLeft: 20,
              opacity: 1,
              transform: "translate3d(0,0px,0)"
            }}
          >
            {user => props => (
              <div style={props} className="box">
               <h1> {user.username}</h1>
              </div>
            )}
          </Trail>
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}
export default App;
