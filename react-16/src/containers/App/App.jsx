import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Topbar from '../../components/Topbar';

import Routes from '../../routes';

import './App.scss';

const App = () => (
  <div data-testid="app">
    <BrowserRouter>
      <Route path="/" component={Topbar}/>
      <Routes/>
    </BrowserRouter>
  </div>
);

export default App;
