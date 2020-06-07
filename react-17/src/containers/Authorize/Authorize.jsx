import React, {useEffect} from 'react';
import {useLocation, Redirect} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {updateAuth} from '../../actions'

import {Loading} from '../../components';

import './Authorize.scss';

const Authorize = () => {

  const dispatch = useDispatch();

  const {auth} = useSelector(state => state);

  const location = useLocation();

  useEffect(() => {

    const data = location.hash.split('&');

    if (data[0].includes('access_token=')){

      const accessToken  = data[0].split('access_token=')[1];
      const tokenType  = data[1].split('token_type=')[1];
      const expiresIn  = data[2].split('expires_in=')[1];
      dispatch(updateAuth({
        accessToken,
        // errorMessage,
        expiresIn,
        isLogged: true,
        tokenType,
      }));
    }
    else if (data[0].includes('error=')){
      const errorMessage  = data[0].split('error=')[1];
      dispatch(updateAuth({
        errorMessage,
        isLogged: false,
      }));
    }
  }, [location]);

  return (
    <div className="callback" data-testid="callback">
      {
        auth.isLogged 
          ? <Redirect to="/dashboard"/>
          : <Loading/>
      }
    </div>
  );
}

export default Authorize;

