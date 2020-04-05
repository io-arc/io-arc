/*!
Webpack Settings
Webpack build settings

https://github.com/io-arc/io-arc/packages/webpack-settings
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("kleur")):"function"==typeof define&&define.amd?define(["exports","kleur"],r):r((e=e||self).WebpackSettings={},e.kleur)}(this,(function(e,r){"use strict";var t={assets:!0,assetsSort:"field",cached:!0,cachedAssets:!0,children:!1,chunks:!1,chunkModules:!1,chunkOrigins:!1,chunksSort:"field",colors:!0,depth:!1,entrypoints:!1,errors:!0,errorDetails:!0,hash:void 0,modules:!1,modulesSort:"field",publicPath:!0,reasons:!1,source:!0,timings:!0,version:!0,warnings:!0},s={hints:"error",maxEntrypointSize:5e6,maxAssetSize:1e7};e.performance=function(e){return e||s},e.progressBar=function(e){return{format:r.blue(" "+e+" ")+" "+r.yellow(":percent")+"/"+r.green(":total%")+" (:elapseds)",clear:!0}},e.stats=function(e){return e||t},Object.defineProperty(e,"__esModule",{value:!0})}));
