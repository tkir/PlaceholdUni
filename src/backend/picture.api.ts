import {resizeImage} from "./utils/picture.model";
let router = require('express').Router();
let config = require('config');
let fs = require('fs');
let root = require('app-root-dir').get();


router.get('*',(req, res, next) => {

  next();
});

router.get('*', function (req, res) {
  resizeImage('', (path) => {console.log('after create');res.sendFile('', '');});
});


module.exports = router;
