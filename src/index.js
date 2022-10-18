import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './scss/app.scss';
import App from './App';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
