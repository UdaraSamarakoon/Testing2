import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { RoutePaths } from '../../routes/route-paths';

const Account = (props) => (
  <tr>
    <td>{props.account.fullname}</td>
    <td>{props.account.nic}</td>
    <td>{props.account.contact}</td>
    <td>{props.account.dob.substring(0, 10)}</td>
    <td>{props.account.purpose}</td>
    <td>{props.account.gender}</td>
    <td>{props.account.civilStatus}</td>
    <td>{props.account.address}</td>
    <td>{props.account.branch}</td>

    <td>
      <Link to={`${RoutePaths.edit}${props.account._id}`}>Edit</Link>| |
      <a
        href="#"
        onClick={() => {
          Swal.fire({
            icon: 'success',
            title: 'Account Request Deleted Successfully!',
            
          })
          props.deleteAccount(props.account._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

Account.propTypes = {
  deleteAccount: PropTypes.func,
  account: PropTypes.shape({
    _id: PropTypes.any,
    dob: PropTypes.shape({
      substring: PropTypes.dob
    }),
    nic: PropTypes.string,
    contact: PropTypes.string,
    fullname: PropTypes.string,
    purpose: PropTypes.string,
    gender: PropTypes.string,
    civilStatus: PropTypes.string,
    address: PropTypes.string,
    branch: PropTypes.string
  })
};
export default Account;
