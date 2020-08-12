/*!
Get file list object
Get file list

https://github.com/io-arc/io-arc/tree/master/packages/file-list
Version: 0.2.6
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("glob")):"function"==typeof define&&define.amd?define(["exports","glob"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).FileLists={},e.glob)}(this,(function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;e.FileListObject=(e,o,n=!1)=>{const l=n?`${e}/[!_]*.${o}`:`${e}/**/[!_]*.${o}`,i=t.sync(l),f=new RegExp(`${e}/`),s=new RegExp(`.${o}$`),r={};return i.forEach(e=>{const t=e.replace(f,"").replace(s,"");r[t]=e}),r},Object.defineProperty(e,"__esModule",{value:!0})}));
