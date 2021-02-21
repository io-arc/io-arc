/*!
@io-arc/file-list
Get file list

Version: 1.0.0
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/file-list.html

Copyright (c) 2020-2021 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("glob")):"function"==typeof define&&define.amd?define(["exports","glob"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).FileLists={},e.glob)}(this,(function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;e.FileListObject=(e,o,n=!1)=>{const l=n?`${e}/[!_]*.${o}`:`${e}/**/[!_]*.${o}`,i=t.sync(l),f=new RegExp(`${e}/`),s=new RegExp(`.${o}$`),r={};return i.forEach(e=>{const t=e.replace(f,"").replace(s,"");r[t]=e}),r},Object.defineProperty(e,"__esModule",{value:!0})}));
