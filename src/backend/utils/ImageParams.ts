let config = require('config');
let root = require('app-root-dir').get();

export class ImageParams {
  private url: string;

  public font: number;
  public paddingTop: number;
  public paddingLeft: number;

  public width: number;
  public height: number;
  public background: string;
  public color: string;
  public filename: string;

  constructor(url) {
    this.url = url;

    this.font = 70;
    this.paddingTop = 0;
    this.paddingLeft = 0;

    this.setImageParams()
  }

  private setImageParams() {
    this.url = this.url.trim();
    if (this.url.charAt(0) === '/')
      this.url = this.url.substr(1);

    let params = this.url.replace(/x/ig, '/').split('/');

    this.width = this.validateSize(params[0], +config.get('Image.minWidth'), +config.get('Image.maxWidth'));
    this.height = this.validateSize(params[1], +config.get('Image.minHeight'), +config.get('Image.maxHeight'));
    this.background = this.validateColor((params[2] || ''), config.get('Image.background'));
    this.color = this.validateColor((params[3] || ''), config.get('Image.color'));
    this.filename = this.getFilename();
  }

//color validation return 6 sing color or ''
  private validateColor(color: string, defaultColor: string): string {
    let res: string;

    if (color.charAt(0) === '#')
      color.substr(1);
    if (~color.search(/[^0-9, a-f]+/i))
      return defaultColor;
    if (color.length != 3 && color.length != 6)
      return defaultColor;
    if (color.length === 3)
      return color.charAt(0) + color.charAt(0) + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2);

    return color;
  }

//size validation
  private validateSize(size: string, min: number, max: number): number {
    let s = parseInt(size);
    if (s < min)return min;
    if (s > max)return max;
    return s;
  }

  private getFilename(): string {
    return `${this.width}x${this.height}x${this.background}x${this.color}.png`;
  }
}

export class ImageOptions {

  public root: string;
  public dotfiles: string;
  public headers: {
    'x-timestamp': number,
    'x-sent': boolean
  };

  constructor() {
    this.root = `${root}/${config.get('Image.path')}`;
    this.dotfiles = config.get('Image.dotfiles');
    this.headers = {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
}
