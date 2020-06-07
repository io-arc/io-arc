/*!
Get file list object
Get file list

https://github.com/io-arc/io-arc/packages/file-list
Version: 0.1.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("glob")):"function"==typeof define&&define.amd?define(["exports","glob"],t):t((e=e||self).FileLists={},e.glob)}(this,(function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;e.FileListObject=(e,o,n=!1)=>{const r=n?`${e}/[!_]*.${o}`:`${e}/**/[!_]*.${o}`,c=t.sync(r),f=new RegExp(`${e}/`),i=new RegExp(`.${o}$`),l={};return c.forEach(e=>{const t=e.replace(f,"").replace(i,"");l[t]=e}),l},Object.defineProperty(e,"__esModule",{value:!0})}));
