import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Routes from './routes';
import { applyMiddleware } from '../../../../../../.cache/typescript/3.0/node_modules/redux';

const store = createStore((state = {}) => state, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
