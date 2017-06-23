let loremIpsum = require('lorem-ipsum');

export class TextModel{
  constructor(url){

  }

  public getText(cb){
    cb(null, loremIpsum());
  }
}
