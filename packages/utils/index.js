/*!
Utility functions

https://github.com/io-arc/io-arc/tree/master/packages/utils
Version: 0.2.6
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/env"),require("@io-arc/path-build"),require("fs")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/path-build","fs"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Utils={},e.env,e.PathBuild,e.fs)}(this,(function(e,t,i,n){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var r,s,a,o,l=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},u=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,i),i};r=new WeakMap,s=new WeakMap,a=new WeakMap,o=new WeakMap;e.AssetsDirPath=e=>t.SITE_ROOT+e.join("/"),e.WebpackExtend=class{constructor(e){if(r.set(this,`${process.cwd()}/config/webpack.extend.js`),s.set(this,void 0),a.set(this,()=>{try{return n.statSync(l(this,r)),!0}catch(e){return!1}}),o.set(this,(e,t)=>null==e?null:t in e?e[t]:null),!l(this,a).call(this))return void u(this,s,null);const t=require(l(this,r));u(this,s,l(this,o).call(this,t,e))}data(){return l(this,s)}externals(){if(null!=l(this,s))return l(this,s).externals||void 0}loaders(){if(null!=l(this,s))return l(this,s).loaders||void 0}},e.siteRootRelative=e=>0===e.length?t.SITE_ROOT:`${t.SITE_ROOT+i.relative(e)}/`,Object.defineProperty(e,"__esModule",{value:!0})}));
