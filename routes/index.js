'use strict';
var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
  res.render('index.hbs');
});

router.post('/', (req, res)=> {
  res.redirect('/');
});

module.exports = router;
