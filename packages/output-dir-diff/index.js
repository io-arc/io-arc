/*!
Output directory diff
Relative path to another directory from one directory

https://github.com/io-arc/io-arc/packages/output-dir-diff
Version: 0.0.2
License: ISC
Copyright (c) 2020 arc obe
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@io-arc/path-build")):"function"==typeof define&&define.amd?define(["@io-arc/path-build"],e):(t=t||self).OutputDirDiff=e(t.PathBuild)}(this,(function(t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var e,i,n,r=function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,i),i},o=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};return e=new WeakMap,i=new WeakMap,n=new WeakMap,class{constructor(t,o){e.set(this,void 0),i.set(this,void 0),n.set(this,void 0),r(this,n,((e=0)=>{const i=t.length;for(let n=0;n<i&&t[n]===o[n];n++)e++;return e})()),r(this,e,t),r(this,i,o)}targetRelativePath(){let r=o(this,e).length-o(this,n),s="";for(;r>0;)s+="../",r--;return s+=t.relative(o(this,i).slice(o(this,n))),s}}}));
