import {ImageParams} from "./ImageParams";
let Jimp = require("jimp");
let text2png = require('text2png');
let config = require('config');
let root = require('app-root-dir').get();

// export function createPNG(params: ImageParams, callback) {
//   let image = new Jimp(params.width, params.height, parseInt(`0x${params.background}ff`, 16),
//     (err, image) => createTextBuffer(params,
//       (err, buffer: Buffer) => Jimp.read(buffer,
//         (err, txtPNG) => image.blit(txtPNG, params.paddingLeft, params.paddingTop,
//           (err, image) => image.write(`${root}/${config.get('Image.path')}/${params.filename}`,
//             (err, im) => callback(`${root}/${config.get('Image.path')}/${params.filename}`)
//             )))));
// }

export function createPNG(params: ImageParams, callback) {
  let image = new Jimp(params.width, params.height, parseInt(`0x${params.background}ff`, 16),
    (err, image) => createTextBuffer(params,
      (err, buffer: Buffer) => Jimp.read(buffer,
        (err, txtPNG) => image.blit(txtPNG, params.paddingLeft, params.paddingTop,
          (err, image) => image.write(`${root}/${config.get('Image.path')}/${params.filename}`,
            (err, image) => {
              console.log(err);
              callback(`${root}/${config.get('Image.path')}/${params.filename}`)
              ;}
          )
        )
      )
    )
  );
}

function createTextBuffer(params: ImageParams, cb) {
  try {
    cb(null, text2png(`${params.width} x ${params.height}`,
      {
        textColor: `#${params.color}`,
        bgColor: `#${params.background}`,
        font: `${params.font}px ${config.get('Image.font')}`
      }));
  }
  catch (err) {
    cb(err, null);
  }
}
