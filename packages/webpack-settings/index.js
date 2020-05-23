/*!
Webpack Settings
Webpack build settings

https://github.com/io-arc/io-arc/packages/webpack-settings
Version: 0.0.1
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("kleur"),require("@io-arc/env")):"function"==typeof define&&define.amd?define(["exports","kleur","@io-arc/env"],s):s((e=e||self).WebpackSettings={},e.kleur,e.env)}(this,(function(e,s,r){"use strict";const n={assets:!0,assetsSort:"field",cached:!0,cachedAssets:!0,children:!1,chunks:!1,chunkModules:!1,chunkOrigins:!1,chunksSort:"field",colors:!0,depth:!1,entrypoints:!1,errors:!0,errorDetails:!0,hash:void 0,modules:!1,modulesSort:"field",publicPath:!0,reasons:!1,source:!0,timings:!0,version:!0,warnings:!0},i={hints:"error",maxEntrypointSize:5e6,maxAssetSize:1e7},t=r.NODE_ENV===r.BUILD.TEST||null===r.JS_SPLIT_FILENAME?{}:{splitChunks:{name:r.JS_SPLIT_FILENAME,chunks:"all",minChunks:2}},o={IS_PRODUCTION:JSON.stringify(r.IS_PRODUCTION),SITE_TITLE:JSON.stringify(r.SITE_TITLE),SITE_URL:JSON.stringify(r.SITE_URL),SITE_AUTHOR:JSON.stringify(r.SITE_AUTHOR),SITE_ROOT:JSON.stringify(r.SITE_ROOT)};e.jsSplitChunks=t,e.performance=e=>e||i,e.progressBar=e=>({format:`${s.blue(` ${e} `)} ${s.yellow(":percent")}/${s.green(":total%")} (:elapseds)`,clear:!0}),e.stats=e=>e||n,e.webpackDefine=o,Object.defineProperty(e,"__esModule",{value:!0})}));
