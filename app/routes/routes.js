var express = require('express');
var router = express.Router();

var extend = require('util')._extend,
  fs = require('fs'),
  request = require('request'),
  querystring = require('querystring')


router.get('national07/index', function (req, res) {
  console.log("national07/index")
  res.render('select-phone');
  if (req.query.eidas != "true") {
    res.redirect('/intro' + res.locals.formQuery);
  } else {
    res.render('select-signin');
  }
});