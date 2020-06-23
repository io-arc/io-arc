/*!
BuildPath
Path create to relative or absolute

https://github.com/io-arc/io-arc/tree/master/packages/path-build
Version: 0.2.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(e=e||self).PathBuild=t(e.path)}(this,(function(e){"use strict";function t(t,n=!1){const o=n?e.resolve:e.join;let r="";return t.forEach(e=>{r=o(r,e)}),r}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;return class{static relative(e){return t(e)}static absolute(e){return t(e,!0)}}}));
