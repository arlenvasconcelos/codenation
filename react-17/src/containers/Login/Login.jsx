import React from 'react';

import {config} from '../../config'

import './Login.scss';
import { Logo } from '../../components';

const Login = () => {

  return (
    <main className="login" data-testid="login">      
      <div className="container">
        <Logo/>
        <div className="login__microcopy">
          Teste<strong>Teste</strong>
        </div>
        <a 
          href={`${config.spotify.authorizationURL}?client_id=${config.spotify.clientId}&redirect_uri=${config.spotify.redirectUrl}&scope=${config.spotify.scopes.toString().replace(/(,)/gi, ' ')}&response_type=token`}
        >
          <button className="login__auth-button">
          Faça Login com o Spotify
          </button>
        </a>
      </div>
    </main>
  );
}
export default Login;
