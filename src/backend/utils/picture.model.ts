import {Photo} from "./Photo";
let getJSONlib = require('get-json');
let config = require('config');

let options = {
  base: 'https://api.flickr.com/services/rest/?',
  method: 'method=flickr.photos.search',
  text: 'text=cat',
  license: '4%2C5%2C6%2C7',
  format: 'format=json&nojsoncallback=1'
};

export function getPicture(cb) {
  getJSONlib('https://api.flickr.com/services/rest/?' +
    'method=flickr.photos.search' +
    '&api_key=046aeef0c02d3a3ef836fec10ac4a5e1' +
    '&text=mam' +
    '&license=4%2C5%2C6' +
    '&sort=relevance' +
    '&format=json&nojsoncallback=1',
    (err, response) => {
      if (err) cb(err, null);
      else cb(null, getPhoto(response.photos.photo[9]));
    });
}

function getPhoto(photo: Photo): string {
  return `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`;
}
