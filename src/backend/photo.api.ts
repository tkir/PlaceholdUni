let router = require('express').Router();

import {PhotoModel} from './utils/Photo';

router.get('*', (req, res) => {

  let model = new PhotoModel(req.originalUrl);
  model.getSinglePhoto((err, url) => {
    if (err) console.error(err);
    else res.redirect(url);
  });

});


module.exports = router;



