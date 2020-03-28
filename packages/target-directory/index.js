/*!
Get Target Directory
Get directory name array or path

https://github.com/io-arc/io-arc/packages/target-directory
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@io-arc/env"),require("@io-arc/path-build"),require("config")):"function"==typeof define&&define.amd?define(["@io-arc/env","@io-arc/path-build","config"],t):(e=e||self).TargetDirectory=t(e.env,e.PathBuild,e.config)}(this,(function(e,t,r){"use strict";return t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,function(){function n(){}return n.wsArray=function(t,n){if(!r.has(t))return[e.WS_ROOT,n];var i=r.get(t);return""===i?[e.WS_ROOT,n]:[e.WS_ROOT,i]},n.wsPath=function(e,r){return t.relative(n.wsArray(e,r))},n}()}));
