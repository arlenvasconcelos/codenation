import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {useDispatch} from 'react-redux';
import {updateAuth} from '../../actions'

import './Authorize.scss';

const Authorize = () => {

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {

    const data = location.hash.split('&')

    const accessToken  = data[0].split('access_token=')[1];
    console.log(accessToken);

    const tokenType  = data[1].split('token_type=')[1];
    console.log(tokenType);

    const expiresIn  = data[2].split('expires_in=')[1];
    console.log(expiresIn);

    const state  = data[3].split('state=')[1];
    console.log(state);

    dispatch(updateAuth({
      accessToken,
      // errorMessage,
      expiresIn,
      isLogged: true,
      tokenType,
    }))

  }, [])

  return (<div className="callback" data-testid="callback"/>);
}

export default Authorize;

