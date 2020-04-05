/*!
Image Loader
Image deploy for using file-loader

https://github.com/io-arc/io-arc/packages/webpack-loaders-image
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("@io-arc/env"),require("@io-arc/output-dir-diff")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/output-dir-diff"],i):i((e=e||self).ImageLoader={},e.env,e.OutputDiff)}(this,(function(e,i,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;const r=require("imagemin-pngquant"),o=require("imagemin-gifsicle"),n=require("imagemin-jpegtran"),a=require("imagemin-svgo"),u=require("imagemin-webpack").loader;e.ImageLoader=(e,p,s)=>{const l=new t(e,p),c=new RegExp(`${i.WS_IMG_PATH_ABSOLUTE}/`);return{test:/\.(png|jpe?g|gif|svg)$/i,use:[{loader:"file-loader",options:{name(e){const i=e.replace(c,"").split("/");return i.pop(),`${i.join("/")}/[name].[ext]${s?"?[hash6]":""}`},outputPath:l.targetRelativePath(),publicPath(e){const t=e.replace(/^\//,"");return i.siteRootRelative(p)+t},esModule:!1,emitFile:!0}},{loader:u,options:{cache:!0,bail:!1,imageminOptions:{plugins:[o({interlaced:!0}),n({progressive:!0}),r({quality:[.8,1]}),a({removeViewBox:!0})]}}}]}},Object.defineProperty(e,"__esModule",{value:!0})}));
