/** @format */

import React, { Component } from 'react';
import Account from '../../components/Account/index';
import { deleteAccount, getAccounts } from '../../services/account';

class AccountsList extends Component {
  state = {
    accounts: [],
  };

  componentDidMount() {
    this.fetchAccounts();
  }

  fetchAccounts = async () => {
    try{
      const response = await getAccounts();

      this.setState({ accounts: response.data || [] });
    
    } catch(e) {
      // error handling
    }
  }

  removeAccount = async (id) => {
    try {
      const response = await deleteAccount(id);

      // check response validation and success logic
      if (response.data) {
        this.setState({
          accounts: this.state.accounts.filter((el) => el._id !== id),
        });
      }

    } catch(e) {
      // error handling
    }
  }

  accountsList() {
    return this.state.accounts.map((currentaccount) => {
      return (
        <Account
          account={currentaccount}
          deleteAccount={this.removeAccount}
          key={currentaccount._id}
        />
      );
    });
  }
 
  render() {
    return (
      <div>
        <h3>Account Lists</h3>
        <br></br>
        <form onSubmit={this.searchHandler}></form>
        <input name ="searchId" type="text"
        placeholder=" search by nic "
        onChange={this.myChangeHandler}/>
        <input className="btn btn-primary" color="info" icon="search" content="width=device-width" type="submit" value={"Search"}/>
        <br></br>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Full Name</th>
              <th>NIC</th>
              <th>Contact Number</th>
              <th>Date of Birth</th>
              <th>Purpose</th>
              <th>Gender</th>
              <th>Civil Status</th>
              <th>Address</th>
              <th>Branch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.accountsList()}</tbody>
        </table>
        <br></br>
        <input type="submit" value="Download PDF" className="btn btn-primary"/>
      </div>
    );
  }
}

export default AccountsList;
