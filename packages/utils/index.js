/*!
@io-arc/utils
Utility functions

Version: 1.0.3
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/utils.html

Copyright (c) 2020-2021 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/env"),require("@io-arc/path-build"),require("fs")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/path-build","fs"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Utils={},e.env,e.PathBuild,e.fs)}(this,(function(e,t,i,n){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var s,r,o,a,l=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},u=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,i),i};s=new WeakMap,r=new WeakMap,o=new WeakMap,a=new WeakMap;e.AssetsDirPath=e=>t.SITE_ROOT+e.join("/"),e.WebpackExtends=class{constructor(e){s.set(this,`${process.cwd()}/config/webpack.extends.js`),r.set(this,void 0),o.set(this,(()=>{try{return n.statSync(l(this,s)),!0}catch(e){return!1}})),a.set(this,((e,t)=>null==e?null:t in e?e[t]:null));if(!l(this,o).call(this))return void u(this,r,null);const t=require(l(this,s));u(this,r,l(this,a).call(this,t,e))}data(){return l(this,r)}externals(){if(null!=l(this,r))return l(this,r).externals||void 0}loaders(){if(null!=l(this,r))return l(this,r).loaders||void 0}plugins(){if(null!=l(this,r))return l(this,r).plugins||void 0}},e.siteRootRelative=e=>0===e.length?t.SITE_ROOT:`${t.SITE_ROOT+i.relative(e)}/`,Object.defineProperty(e,"__esModule",{value:!0})}));
