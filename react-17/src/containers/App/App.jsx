import React from 'react';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react';
import {BrowserRouter, Route} from 'react-router-dom';

import configureStore from '../../store';

import Routes from '../../routes';

import {Loading} from '../../components'

import './App.scss';

const App = () => {

  const { persistor, store } = configureStore();

  return (

    <Provider store={store}>
      <PersistGate 
        loading={<Loading/>} 
        persistor={persistor}
      >
        <BrowserRouter>
          <div className="app" data-testid="app">
            <Routes/>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    
  )
};



export default App;
