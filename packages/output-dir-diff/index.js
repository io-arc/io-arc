/*!
@io-arc/output-dir-diff
Relative path to another directory from one directory

Version: 1.0.3
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/output-dir-diff.html

Copyright (c) 2020-2022 arc obe
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@io-arc/path-build")):"function"==typeof define&&define.amd?define(["@io-arc/path-build"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).OutputDirDiff=e(t.PathBuild)}(this,(function(t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var e,i,n,o=function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,i),i},r=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};return e=new WeakMap,i=new WeakMap,n=new WeakMap,class{constructor(t,r){e.set(this,void 0),i.set(this,void 0),n.set(this,void 0),o(this,n,((e=0)=>{const i=t.length;for(let n=0;n<i&&t[n]===r[n];n++)e++;return e})()),o(this,e,t),o(this,i,r)}targetRelativePath(){let o=r(this,e).length-r(this,n),s="";for(;o>0;)s+="../",o--;return s+=t.relative(r(this,i).slice(r(this,n))),s}}}));
