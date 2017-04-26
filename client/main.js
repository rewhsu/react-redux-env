import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import myApp from './reducers/index';
import AppContainer from './containers/AppContainer';

var store = createStore(
  myApp,
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, 
  document.getElementById('app')
);