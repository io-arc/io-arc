/*!
@io-arc/webpack-settings
Webpack build settings

Version: 1.0.2
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/webpack-settings.html

Copyright (c) 2020-2021 arc one
*/
!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("@io-arc/env"),require("kleur")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","kleur"],i):i((e="undefined"!=typeof globalThis?globalThis:e||self).WebpackSettings={},e.env,e.kleur)}(this,(function(e,i,s){"use strict";const n={assets:!0,assetsSort:"field",cached:!0,cachedAssets:!0,children:!1,chunks:!1,chunkModules:!1,chunkOrigins:!1,chunksSort:"field",colors:!0,depth:!1,entrypoints:!1,errors:!0,errorDetails:!0,hash:void 0,modules:!1,modulesSort:"field",publicPath:!0,reasons:!1,source:!0,timings:!0,version:!0,warnings:!0},r={hints:"error",maxEntrypointSize:5e6,maxAssetSize:1e7},t=i.NODE_ENV===i.BUILD.TEST||null===i.JS_SPLIT_FILENAME?{}:{splitChunks:{name:i.JS_SPLIT_FILENAME,chunks:"all",minChunks:2}},o=require("terser-webpack-plugin"),l={...i.JS_MINIFY?{minimize:!0,minimizer:[new o(i.JS_TERSER)]}:{},...t},a={IS_PRODUCTION:JSON.stringify(i.IS_PRODUCTION),SITE_TITLE:JSON.stringify(i.SITE_TITLE),SITE_URL:JSON.stringify(i.SITE_URL),SITE_AUTHOR:JSON.stringify(i.SITE_AUTHOR),SITE_ROOT:JSON.stringify(i.SITE_ROOT)};e.jsOptimization=l,e.performance=e=>e||r,e.progressBar=e=>({format:`${s.blue(` ${e} `)} ${s.yellow(":percent")}/${s.green(":total%")} (:elapseds)`,clear:!0}),e.stats=e=>e||n,e.webpackDefine=a,Object.defineProperty(e,"__esModule",{value:!0})}));
