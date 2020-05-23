/*!
WebpackLoadersJS
JS loaders for webpack

https://github.com/io-arc/io-arc/packages/webpack-loaders-js
Version: 0.0.2
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@io-arc/utils"),require("@io-arc/env")):"function"==typeof define&&define.amd?define(["exports","@io-arc/utils","@io-arc/env"],o):o((e=e||self).WebpackLoardersJS={},e.utils,e.env)}(this,(function(e,o,t){"use strict";const r={test:/\.worker\.(jsx?|tsx?)$/,use:[{loader:"worker-loader",options:{publicPath:o.siteRootRelative(t.OUTPUT_JS_ARRAY),name:"[name].js"}}]};e.EslintLoader=(e="")=>{const o={failOnError:!0};return""!==e&&(o.useEslintrc=!1,o.configFile=e),{test:/\.(jsx?|tsx?|vue)$/,loader:"eslint-loader",enforce:"pre",options:o,exclude:/node_modules/}},e.TypescriptLoader=(e=!1)=>{const o={transpileOnly:!0,configFile:t.TSCONFIG};return e&&(o.appendTsSuffixTo=[/\.vue$/]),{test:/\.tsx?$/,use:[{loader:"ts-loader",options:o}],exclude:/node_modules/}},e.babelLoader={test:/\.jsx?$/,loader:"babel-loader"},e.workerLoader=r,e.yamlLoader={test:/\.ya?ml$/,type:"json",use:"yaml-loader"},Object.defineProperty(e,"__esModule",{value:!0})}));
