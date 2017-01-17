import express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import { createStore } from 'redux'
import todoReducers from '../client/reducers'
import routes from '../client/routes'

var router = express.Router();
let store = createStore(todoReducers)

/* GET home page. */
router.get('*', (req, res, next) => {
  match({routes, location: req.url}, (error,redirectLocation,renderProps) => {
      if(error) {
        res.send(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        res.render('index', { title: "React Playground!!",
                              app: renderToString(<Provider store={store}><RouterContext {...renderProps} /></Provider>) })
      } else {
        res.status(404).send('Not found')
      }
  })
})

module.exports = router;
