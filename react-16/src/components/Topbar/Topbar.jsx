import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header data-testid="topbar" className="topbar">
    <div className="container">
      <Link to="/" className="topbar__logo">
        <LogoSvg alt="logo"/>
      </Link>
      <div className="topbar__group">
        <div className="topbar__icon">
          <Link to="/users">
            <i className="fas fa-users" />
            <span>Usuários</span>
          </Link>
        </div>
        <div className="topbar__icon">
          <Link to="newuser">
            <i className="fas fa-user-plus" />
            <span>Nova Conta</span> 
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Topbar;
