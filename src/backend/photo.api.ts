let router = require('express').Router();

import {PhotoModel} from './models/photo.model';

router.get('*', (req, res) => {

  let model = new PhotoModel(req.originalUrl);
  model.getSinglePhoto((err, buffer:Buffer) => {
    if (err) console.error(err);
    else {
      res.contentType('image/jpeg');
      res.end(buffer, 'binary');
    }
  });

});


module.exports = router;



