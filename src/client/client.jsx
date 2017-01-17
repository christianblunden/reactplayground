import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import todoReducers from './reducers'
import routes from './routes'

let store = createStore(todoReducers)

render(
  <Provider store={store}>
    <Router history={browserHistory} children={routes} />
  </Provider>,
  document.getElementById('root')
);
