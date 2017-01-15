import express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server'
import App from '../client/components/app'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "React Playground!!", app: renderToString(<App />) });
});

module.exports = router;
