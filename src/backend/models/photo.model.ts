let config = require('config');
let root = require('app-root-dir').get();
let getJSONlib = require('get-json');
let Jimp = require("jimp");
let request = require('request');

export class Photo {
  public id: string;
  public owner: string;
  public secret: string;
  public server: string;
  public farm: string;
  public title: string;
  public ispublick: boolean;
  public isfriend: boolean;
  public isfamily: boolean;
}

export class PhotoModel {
  private url: string;

  public width: number;
  public height: number;
  public theme: string;

  public photos: Photo[] = null;
  public error: any = null;

  constructor(url: string) {
    this.url = url;

    this.setPotoParams()
  }

  private setPotoParams() {
    this.url = this.url.trim();
    if (this.url.charAt(0) === '/')
      this.url = this.url.substr(1);

    let params = this.url.replace(/x/ig, '/').split('/');

    this.width = this.validateSize(params[1], +config.get('Photo.maxWidth'));
    this.height = this.validateSize(params[2], +config.get('Photo.maxHeight'));
    this.theme = params[3] || config.get('Photo.defaultTheme');

  }

//size validation
  private validateSize(size: string, max: number): number {
    let s = parseInt(size);
    if (s > max)return max;
    return s;
  }

//  get photos from flockr
  private getPhotos(cb) {
    getJSONlib(
      config.get('Photo.Flickr.url') +
      'method=flickr.photos.search' +
      '&api_key=' + config.get('Photo.Flickr.Key') +
      '&text=' + this.theme +
      '&license=4%2C5%2C6' +
      '&sort=relevance' +
      '&format=json&nojsoncallback=1',
      (err, response) => {
        if (err) this.error = err;
        else this.photos = response.photos.photo;

        this.getPhotoBuffer(this.randPhoto,
          (err, buffer: Buffer) => {
            //TODO save into mongoDB, if new request with the same params return from db!

            cb(err, buffer);
          });
      }
    );
  }

  public getSinglePhoto(cb) {
    if (this.photos !== null || this.error !== null)
      cb(this.error, this.getPhotoURL(this.randPhoto));
    else {
      this.getPhotos((err, buffer) => cb(err, buffer));
    }
  }

  public getPhotoArray(cb) {
    if (this.photos !== null || this.error !== null)
      cb(this.error,
        this.photos.map(p => this.getPhotoURL(p)) || null
      );
    else {
      this.getPhotos(
        () => cb(this.error,
          this.photos.map(p => this.getPhotoURL(p)) || null
        ));
    }
  }

  private get randPhoto(): Photo {
    if (this.photos !== null)
      return this.photos[Math.floor(0 + Math.random() * /*this.photos.length*/20)];
    return null;
  }

  private getPhotoURL(photo: Photo): string {
    if (!photo) return null;
    return `http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  }

  private getPhotoBuffer(photo: Photo, cb) {
    Jimp.read(this.getPhotoURL(photo),
      (err, image) => image.cover(this.width, this.height,
        (err, image) => image.getBuffer(Jimp.MIME_PNG,
          (err, buffer) => cb(err || null, buffer)
        )));
  }
}
