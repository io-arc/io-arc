/*!
BuildPath
Path create to relative or absolute

https://github.com/io-arc/io-arc/packages/path-build
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(e=e||self).PathBuild=t(e.path)}(this,(function(e){"use strict";function t(t,n){void 0===n&&(n=!1);var o=n?e.resolve:e.join,u="";return t.forEach((function(e){u=o(u,e)})),u}return e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,function(){function e(){}return e.relative=function(e){return t(e)},e.absolute=function(e){return t(e,!0)},e}()}));
