/*!
@io-arc/path-build
Path create to relative or absolute

Version: 1.0.3
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/path-build.html

Copyright (c) 2020-2021 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).PathBuild=t(e.path)}(this,(function(e){"use strict";function t(t,o=!1){const n=o?e.resolve:e.join;let i="";return t.forEach((e=>{i=n(i,e)})),i}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;return class{static relative(e){return t(e)}static absolute(e){return t(e,!0)}}}));
