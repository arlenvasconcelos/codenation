import React from 'react';

import {apiLogin} from '../../constants';
import {config} from '../../config'

import './Login.scss';

const Login = () => {

  console.log(config)

  return (
    <main className="login" data-testid="login">
      <div className="container">
        <a 
          href={`${config.spotify.authorizationURL}?client_id=${config.spotify.clientId}&redirect_uri=${config.spotify.redirectUrl}&scope=${config.spotify.scopes.toString().replace(/(,)/gi, ' ')}&response_type=token`}
        >
          <button>
          Faça Login com o Spotify
          </button>
        </a>
      </div>
    </main>
  );
}
export default Login;
