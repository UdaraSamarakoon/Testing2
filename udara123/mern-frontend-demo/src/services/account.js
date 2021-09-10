import { ACCOUNT,CREATE_ACCOUNT,DELETE_ACCOUNT,GET_ACCOUNT,UPDATE_ACCOUNT } from './client/endpoints';
import { Axios } from './client/index';

// get exervises
export const getAccounts = () => {
  return Axios.get(ACCOUNT);
};

// delete exervises
export const deleteAccount = (id) => {
  return Axios.delete(`${DELETE_ACCOUNT}/${id}`);
};
//add exervises
export const addAccounts = (account) => {
  return Axios.post(CREATE_ACCOUNT,account);
};

// get single exervise
export const getSingleAccount = (id) => {
  return Axios.get(`${GET_ACCOUNT}/${id}`);
};

//update exervise
export const updateAccounts = (id,account) => {
  return Axios.post(`${UPDATE_ACCOUNT}/${id}`,account);
};
