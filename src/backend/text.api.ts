let router = require('express').Router();
import {TextModel} from './models/text.model';

router.get('*', (req, res) => {

  let model = new TextModel(req.originalUrl);
  model.getText((err, text) => {
    if (err) console.error(err);
    else res.send(text);
  });

});


module.exports = router;
