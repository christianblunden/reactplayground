import express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoReducers from '../client/reducers'
import App from '../client/components/app'

var router = express.Router();
let store = createStore(todoReducers)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "React Playground!!",
                        app: renderToString(<Provider store={store}><App /></Provider>) });
});

module.exports = router;
