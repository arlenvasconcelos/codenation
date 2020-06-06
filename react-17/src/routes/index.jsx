import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {PrivateRoute} from '../containers';
import LoginRoute from './LoginRoute/LoginRoute';
import DashboardRoute from './DashboardRoute/DashboardRoute';
import AuthorizeRoute from './AuthorizeRoute/AuthorizedRoute';

const Routes = () => {

  return (
    <>
      <Route path="/login" component={LoginRoute}/>
      <Route path="/authorize" component={AuthorizeRoute}/>
      <PrivateRoute path="/dashboard" comp={DashboardRoute}/>
    </>
  )
}


export default Routes;