/** @format */

import React, { Component } from 'react';
import { createUser } from '../../services/user';

class User extends Component {
  state = {
    fullname: '',
  };

  onChangeUsername = (e) => {
    this.setState({
      fullname: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      fullname: this.state.fullname,
    };

    try {
      const response = await createUser(user);
      // success scenario handle here
      console.log(response.data);
    } catch(ex) {
      // error handling
      // show proper error message to user
    }
    this.setState({ username: '' });
  };

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default User;
