/*!
@io-arc/webpack-loaders-image
Image deploy for using file-loader

Version: 1.0.3
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/webpack-loaders-image.html

Copyright (c) 2020-2021 arc one
*/
!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("@io-arc/env"),require("@io-arc/output-dir-diff"),require("@io-arc/utils")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/output-dir-diff","@io-arc/utils"],i):i((e="undefined"!=typeof globalThis?globalThis:e||self).ImageLoader={},e.env,e.OutputDiff,e.utils)}(this,(function(e,i,t,o){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;const r=new(require("image-minimizer-webpack-plugin"))({test:/\.(jpe?g|png|gif|svg)$/i,severityError:"warning",minimizerOptions:{plugins:[["gifsicle",{interlaced:!0}],["jpegtran",{progressive:!0}],["optipng",{optimizationLevel:5}],["svgo",{plugins:[{removeViewBox:!0}]}]]}});e.ImageLoader=(e,r,n)=>{const a=new t(e,r),p=new RegExp(`${i.WS_IMG_PATH_ABSOLUTE}/`);return{test:/\.(png|jpe?g|gif|svg|webp|avif)$/i,use:[{loader:"file-loader",options:{name(e){const i=e.replace(p,"").split("/");return i.pop(),`${i.join("/")}/[name].[ext]${n?"?[hash:6]":""}`},outputPath:a.targetRelativePath(),publicPath(e){const i=e.replace(/^\//,"");return o.siteRootRelative(r)+i},esModule:!1,emitFile:!0}}]}},e.ImageMinPlugin=r,Object.defineProperty(e,"__esModule",{value:!0})}));
