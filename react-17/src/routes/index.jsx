import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Login, Dashboard} from '../containers';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => (false ? (
      <Component
        {...props}
      />
    ) : (
      <Redirect to="/login" />
    ))}
  />
)


const Routes = () => {

  return (
    <>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/dashboard" component={Dashboard}/>
    </>
  )
}


export default Routes;