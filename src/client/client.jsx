import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoReducers from './reducers'
import App from './components/app'

let store = createStore(todoReducers)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
