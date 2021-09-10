/** @format */
import React from 'react';
import { Route } from 'react-router-dom';
import AccountsList from '../pages/AccountList';
import CreateAccount from '../pages/CreateAccount';
import EditAccounts from '../pages/EditAccount';
import User from '../pages/User';
import { RoutePaths } from './route-paths';

const Routes = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/" exact component={AccountsList} />
      <Route path={`${paths.edit}:id`} component={EditAccounts} />
      <Route path={paths.create} component={CreateAccount} />
      <Route path={paths.user} component={User} />
    </>
  );
};

export default Routes;
