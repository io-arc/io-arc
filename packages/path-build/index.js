/*!
BuildPath
Path create to relative or absolute

https://github.com/io-arc/io-arc/packages/path-build
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@io-arc/env"),require("path")):"function"==typeof define&&define.amd?define(["@io-arc/env","path"],t):(e=e||self).PathBuild=t(e.env,e.path)}(this,(function(e,t){"use strict";function n(e,n){void 0===n&&(n=!1);var o=n?t.resolve:t.join,r="";return e.forEach((function(e){r=o(r,e)})),r}return t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,function(){function t(){}return t.relative=function(e){return n(e)},t.absolute=function(e){return n(e,!0)},t.rootRelative=function(n){return 0===n.length?e.SITE_ROOT:e.SITE_ROOT+t.relative(n)+"/"},t}()}));
