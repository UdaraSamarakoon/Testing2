/** @format */

import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2'
import { addAccounts } from '../../services/account';
// import { getUsers } from '../../services/user';

class CreateAccount extends Component {
  state = {
    fullname: '',
    nic: '',
    contact: '',
    dob: new Date(),
    purpose: '',
    gender: '',
    civilStatus: '',
    address: '',
    branch: '',
    users: [],
  };

  // componentDidMount() {
  //   this.fetchUsers();
  //  }

  // fetchUsers = async () => {
  //   try{
  //     const response = await getUsers();

  //    if (response.data.length > 0) {
  //       this.setState({
  //         users: response.data.map((user) => user.fullname),
  //         fullname: response.data[0].fullname,
  //       });
  //     }
    
  //   } catch(ex) {
  //     // error handling
  //   }
  // }
  
  onChangeUsername = (e) => {
    this.setState({
      fullname: e.target.value,
    });
  };
  onChangeDescription = (e) => {
    this.setState({
      nic: e.target.value,
    });
  };
  onChangeDuration = (e) => {
    this.setState({
      contact: e.target.value,
    });
  };
  onChangeDate = (dob) => {
    this.setState({
      dob: dob,
    });
  };
  onChangePurpose = (e) => {
    this.setState({
      purpose: e.target.value,
    });
  };
  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  onChangeCivilstatus = (e) => {
    this.setState({
      civilStatus: e.target.value,
    });
  };
  onChangeAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  onChangeBranch = (e) => {
    this.setState({
      branch: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const account = {
      fullname: this.state.fullname,
      nic: this.state.nic,
      contact: this.state.contact,
      dob: this.state.dob,
      purpose: this.state.purpose,
      gender: this.state.gender,
      civilStatus: this.state.civilStatus,
      address: this.state.address,
      branch: this.state.branch,

    };
    try {
      const response = await addAccounts(account);
      // success scenario handle here
      if (response.data) {
      //  console.log(response.data);
      }

    } catch(ex) {
      // error handling
      // show proper error message to user
    }
    Swal.fire({
      icon: 'success',
      title: 'Account Request Sent Successfully!',
      
    })
    // this.setState({ fullname: this.state.users[0] });
    this.setState({ fullname: '' });
    this.setState({ nic: '' });
    this.setState({ contact: '' });
    this.setState({ dob: new Date() });
    this.setState({ purpose: '' });
    this.setState({ gender: '' });
    this.setState({ civilStatus: '' });
    this.setState({ address: '' });
    this.setState({ branch: '' });
  };

  render() {
    return (
      <div>
        <h3>Apply for a new account</h3>
        <form onSubmit={this.onSubmit}>
          {/* <div className="form-group">
            <label>Full Name</label>
            <select
              ref={(el) => (this.inputElement = el)}
              required
              className="form-control"
              value={this.state.fullname}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div> */}
          <div className="form-group">
            <label> Full Name</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.fullname}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label> NIC</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.nic}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label> Contact Number</label>
            <input
              type="text"
              className="form-control"
              value={this.state.contact}
              onChange={this.onChangeDuration}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="contact"> Contact Number</label>
            <input
                 type="text"
                 className="form-control"
                 id="contact"
                 required
                 value={this.state.contact}
                 onChange={this.onChangeDuration}
                 name="contact"
                 placeholder="123-45-678"
                 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
          </div> */}
          <div className="form-group">
            <label> Date of Birth</label>
            <div>
              <DatePicker
                selected={this.state.dob}
                onChange={this.onChangeDate}
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
                
              />
            </div>
          </div>
          <div className="form-group">
            <label> Purpose</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.purpose}
              onChange={this.onChangePurpose}
            />
          </div>
          <div className="form-group">
            <label> Gender</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangeGender}
            />
          </div>
          <div className="form-group">
            <label> Civil Status</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.civilStatus}
              onChange={this.onChangeCivilstatus}
            />
          </div>
          <div className="form-group">
            <label> Address</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </div>
          <div className="form-group">
            <label> Branch</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.branch}
              onChange={this.onChangeBranch}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Account"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
