/*!
@io-arc/file-list
Get file list

Version: 1.0.2
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/file-list.html

Copyright (c) 2020-2021 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("glob"),require("path")):"function"==typeof define&&define.amd?define(["exports","glob","path"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).FileLists={},e.glob,e.path)}(this,(function(e,t,o){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;e.FileListObject=(e,l,n=!1)=>{const p=n?`${e}/[!_]*.${l}`:`${e}/**/[!_]*.${l}`,r=t.sync(p),f=new RegExp(`${e+o.sep}`),i=new RegExp(`.${l}$`),s={};return r.forEach((e=>{const t=e.replace(f,"").replace(i,"");s[t]=e})),s},Object.defineProperty(e,"__esModule",{value:!0})}));
