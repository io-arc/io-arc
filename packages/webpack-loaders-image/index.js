/*!
Image Loader
Image deploy for using file-loader

https://github.com/io-arc/io-arc/tree/master/packages/webpack-loaders-image
Version: 0.2.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/env"),require("@io-arc/output-dir-diff"),require("@io-arc/utils")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/output-dir-diff","@io-arc/utils"],t):t((e=e||self).ImageLoader={},e.env,e.OutputDiff,e.utils)}(this,(function(e,t,i,o){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;const r=require("imagemin-webpack").loader;e.ImageLoader=(e,a,n)=>{const u=new i(e,a),p=new RegExp(`${t.WS_IMG_PATH_ABSOLUTE}/`);return{test:/\.(png|jpe?g|gif|svg)$/i,use:[{loader:"file-loader",options:{name(e){const t=e.replace(p,"").split("/");return t.pop(),`${t.join("/")}/[name].[ext]${n?"?[hash:6]":""}`},outputPath:u.targetRelativePath(),publicPath(e){const t=e.replace(/^\//,"");return o.siteRootRelative(a)+t},esModule:!1,emitFile:!0}},{loader:r,options:{cache:!0,bail:!1,imageminOptions:{plugins:[["gifsicle",{interlaced:!0}],["jpegtran",{progressive:!0}],["pngquant",{quality:[.8,1]}],["svgo",{removeViewBox:!0}]]}}}]}},Object.defineProperty(e,"__esModule",{value:!0})}));
