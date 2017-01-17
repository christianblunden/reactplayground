import React     from 'react';
import { Route } from 'react-router';
import App from './components/app';

export default (
  <Route path="/(:filter)" component={App} />
)
