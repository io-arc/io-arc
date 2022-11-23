/*!
@io-arc/webpack-loaders-js
JS loaders for webpack

Version: 1.1.0
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/webpack-loaders-js.html

Copyright (c) 2020-2022 arc one
*/
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@io-arc/utils"),require("@io-arc/env")):"function"==typeof define&&define.amd?define(["exports","@io-arc/utils","@io-arc/env"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).WebpackLoadersJS={},e.utils,e.env)}(this,(function(e,o,t){"use strict";const r={test:/\.worker\.(jsx?|tsx?)$/,use:[{loader:"worker-loader",options:{publicPath:o.siteRootRelative(t.OUTPUT_JS_ARRAY),name:"[name].js"}}]};e.EslintLoader=(e="")=>{const o={failOnError:!0};return""!==e&&(o.useEslintrc=!1,o.configFile=e),{test:/\.(jsx?|tsx?|vue)$/,loader:"eslint-loader",enforce:"pre",options:o,exclude:/node_modules/}},e.TypescriptLoader=(e=!1)=>{const o={transpileOnly:!0,configFile:t.TSCONFIG};return e&&(o.appendTsSuffixTo=[/\.vue$/]),{test:/\.tsx?$/,use:[{loader:"ts-loader",options:o}],exclude:/node_modules/}},e.babelLoader={test:/\.jsx?$/,loader:"babel-loader"},e.workerLoader=r,e.yamlLoader={test:/\.ya?ml$/,type:"json",use:"yaml-loader"},Object.defineProperty(e,"__esModule",{value:!0})}));
