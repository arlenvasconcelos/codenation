import React, {useEffect} from 'react';
import {useLocation, Redirect} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {updateAuth, updateUser} from '../../actions'

import {Loading} from '../../components';

import './Authorize.scss';

const Authorize = () => {

  const dispatch = useDispatch();

  const {auth, user} = useSelector(state => state);

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

  //get user
  useEffect(() => {
    if(auth.accessToken){
      fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
          'Accept': "application/json",
          'Content-Type': "application/json",
          'Authorization': 'Bearer ' + auth.accessToken
        }
      })      
      .then((response) => response.json())
      .then(data => {
        const email = data.email;
        const name = data.display_name;
        const thumb = data.images[0].url;
        dispatch(updateUser({email, name, thumb}))
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },[auth.accessToken])

  return (
    <div className="callback" data-testid="callback">
      {
        auth.isLogged && user.name
          ? <Redirect to="/dashboard"/>
          : <Loading/>
      }
    </div>
  );
}

export default Authorize;

