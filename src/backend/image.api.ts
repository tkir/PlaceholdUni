let router = require('express').Router();
let config = require('config');
let fs = require('fs');
let root = require('app-root-dir').get();

import {ImageModel, ImageOptions} from './models/image.model';

router.get('*', function (req, res) {

  let model = new ImageModel(req.originalUrl);
  let imageOptions = new ImageOptions();

  fs.access(`${root}/${config.get('Image.path')}/${model.filename}`,
    (err) => {
      if (!err) res.sendFile(model.filename, imageOptions);
      else {
        model.createPNG((err, buffer: Buffer) => {
          if (err) console.error(err);

          res.contentType('image/jpeg');
          res.end(buffer, 'binary');
        });
      }
    });

});


module.exports = router;
