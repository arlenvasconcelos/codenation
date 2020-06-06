import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Routes from '../../routes';

import './App.scss';

const App = () => {

  return (
    <BrowserRouter>
      <div className="app" data-testid="app">
        <Routes/>
      </div>
    </BrowserRouter>
  )
};

export default App;
