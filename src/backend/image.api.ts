let router = require('express').Router();
let config = require('config');
import {ImageParams, ImageOptions} from './utils/ImageParams'
let fs = require('fs');
let root = require('app-root-dir').get();

import {createPNG} from './utils/png.model';

let imageParams: ImageParams;
let imageOptions: ImageOptions;

router.get('*',(req, res, next) => {
  imageParams = new ImageParams(req.originalUrl);
  imageOptions = new ImageOptions();

  next();
});

router.get('*', function (req, res, next) {
  fs.access(`${root}/${config.get('Image.path')}/${imageParams.filename}`,
    (err) => {
      if (!err) res.sendFile(imageParams.filename, imageOptions);
      else next();
    });
});

router.get('*', function (req, res) {
  createPNG(imageParams, (path) => {console.log('after create');res.sendFile(imageParams.filename, imageOptions);});
});


module.exports = router;
