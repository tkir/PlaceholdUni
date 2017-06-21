import {ImageParams} from "./ImageParams";
let Jimp = require("jimp");
let config = require('config');
let root = require('app-root-dir').get();

export function resizeImage(params, callback) {
  let image = new Jimp(params.width, params.height, parseInt(`0x${params.background}ff`, 16),
      (err, buffer: Buffer) => Jimp.read(buffer,
        (err, txtPNG) => image.blit(txtPNG, params.paddingLeft, params.paddingTop,
          (err, image) => image.write(`${root}/${config.get('Image.path')}/${params.filename}`,
            (err, image) => {console.log(err);callback(`${root}/${config.get('Image.path')}/${params.filename}`)
            ;})
        )
      )
  );
}
