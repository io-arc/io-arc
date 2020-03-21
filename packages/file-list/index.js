/*!
Get file list object
Get file list

https://github.com/io-arc/io-arc/packages/file-list
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("glob")):"function"==typeof define&&define.amd?define(["exports","glob"],t):t((e=e||self).FileLists={},e.glob)}(this,(function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;e.FileListObject=function(e,o,n){void 0===n&&(n=!1);var i=n?e+"/[!_]*."+o:e+"/**/[!_]*."+o,r=t.sync(i),f=new RegExp(e+"/"),c=new RegExp("."+o+"$"),l={};return r.forEach((function(e){var t=e.replace(f,"").replace(c,"");l[t]=e})),l},Object.defineProperty(e,"__esModule",{value:!0})}));
