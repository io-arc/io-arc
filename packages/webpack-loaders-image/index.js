/*!
@io-arc/webpack-loaders-image
Image deploy for using file-loader

Version: 1.1.1
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/webpack-loaders-image.html

Copyright (c) 2020-2022 arc one
*/
!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("@io-arc/env"),require("@io-arc/output-dir-diff"),require("@io-arc/utils")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/output-dir-diff","@io-arc/utils"],i):i((e="undefined"!=typeof globalThis?globalThis:e||self).ImageLoader={},e.env,e.OutputDiff,e.utils)}(this,(function(e,i,t,r){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;const n=require("image-minimizer-webpack-plugin");e.ImageLoader=(e,n,o)=>{const u=new t(e,n),a=new RegExp(`${i.WS_IMG_PATH_ABSOLUTE}/`);return{test:/\.(png|jpe?g|gif|svg|webp|avif)$/i,use:[{loader:"file-loader",options:{name(e){const i=e.replace(a,"").split("/");return i.pop(),`${i.join("/")}/[name].[ext]${o?"?[hash:6]":""}`},outputPath:u.targetRelativePath(),publicPath(e){const i=e.replace(/^\//,"");return r.siteRootRelative(n)+i},esModule:!1,emitFile:!0}}]}},e.ImageMinPlugin=()=>{if(null!=i.USE_IMAGEMIN&&0!==i.USE_IMAGEMIN.length)return new n({test:/\.(jpe?g|png|gif|svg)$/i,severityError:"warning",minimizerOptions:{plugins:i.USE_IMAGEMIN}})},Object.defineProperty(e,"__esModule",{value:!0})}));
