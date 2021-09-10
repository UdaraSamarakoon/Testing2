/** @format */

import React, { Component } from 'react';
//import axios from 'axios';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { updateAccounts } from '../../services/account';
// import { getUsers } from '../../services/user';
import 'react-datepicker/dist/react-datepicker.css';

class EditAccounts extends Component {
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

  componentDidMount() {
    this.fetchAccounts();
    // this.fetchUsers();
   
   }
    
  fetchAccounts = async () => {
    try {
      
      const response = await getSingleExercise(this.props.match.params.id);

     this.setState({
          fullname: response.data.fullname,
          nic: response.data.nic,
          contact: response.data.contact,
          dob: new Date(response.data.dob),
          purpose: response.data.purpose,
          gender: response.data.gender,
          civilStatus: response.data.civilStatus,
          address: response.data.address,
          branch: response.data.branch,

        });
    
    } catch(e) {
      // error handling
    }
  }
  // fetchUsers = async () => {
  //   try{
  //     const response = await getUsers();

  //     this.setState({ users: response.data.map((user) => user.fullname) });
    
  //   } catch(e) {
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
    
    try{
      const response = await updateAccounts(this.props.match.params.id,account);
      console.log(response.data);
    
    } catch(e) {
      // error handling
    }

    this.setState({ fullname: '' });
    this.setState({ nic: '' });
    this.setState({ contact: '' });
    this.setState({ dob: new Date() });
    this.setState({ purpose: '' });
    this.setState({ gender: '' });
    this.setState({ civilStatus: '' });
    this.setState({ address: '' });
    this.setState({ branch: '' });
    //window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Edit Account Details</h3>
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
          <div className="form-group">
            <label> Date of Birth</label>
            <div>
              <DatePicker
                selected={this.state.dob}
                onChange={this.onChangeDate}
                maxDate={new Date()}
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
              value="Edit"
              className="btn btn-primary"
            /> 
          </div>
        </form>
      </div>
      
    );
  }
}
    
EditAccounts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any
     
    })
  }),
}
export default EditAccounts;
