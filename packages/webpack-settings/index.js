/*!
Webpack Settings
Webpack build settings

https://github.com/io-arc/io-arc/packages/webpack-settings
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("kleur")):"function"==typeof define&&define.amd?define(["exports","kleur"],s):s((e=e||self).WebpackSettings={},e.kleur)}(this,(function(e,s){"use strict";const r={assets:!0,assetsSort:"field",cached:!0,cachedAssets:!0,children:!1,chunks:!1,chunkModules:!1,chunkOrigins:!1,chunksSort:"field",colors:!0,depth:!1,entrypoints:!1,errors:!0,errorDetails:!0,hash:void 0,modules:!1,modulesSort:"field",publicPath:!0,reasons:!1,source:!0,timings:!0,version:!0,warnings:!0},t={hints:"error",maxEntrypointSize:5e6,maxAssetSize:1e7};e.performance=e=>e||t,e.progressBar=e=>({format:`${s.blue(` ${e} `)} ${s.yellow(":percent")}/${s.green(":total%")} (:elapseds)`,clear:!0}),e.stats=e=>e||r,Object.defineProperty(e,"__esModule",{value:!0})}));
