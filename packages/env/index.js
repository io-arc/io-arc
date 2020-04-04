/*!
Environment
Build environment define

https://github.com/io-arc/io-arc/packages/env
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/path-build"),require("config")):"function"==typeof define&&define.amd?define(["exports","@io-arc/path-build","config"],t):t((e=e||self).Env={},e.PathBuild,e.config)}(this,(function(e,t,r){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function n(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)n[o]=i[s];return n}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;var o={DEVELOPMENT:"development",PRODUCTION:"production",TEST:"test",NONE:"none"},i={ONCE:"once",WATCH:"watch"},s=r.has("overrideEnv")?r.get("overrideEnv"):process.env.NODE_ENV||o.DEVELOPMENT,a=process.env.MODE_ENV||i.ONCE,c=function(e,t){return r.has(e)?r.get(e):t},u=function(e,t){if(!r.has(e))return["src",t];var n=r.get(e);return""===n?["src",t]:["src",n]},f=c("outputDir","dist"),l=function(e,r){return t.relative(u(e,r))},O=u("wsDir.static","static"),E=l("wsDir.static","static"),d=u("wsDir.yaml2json","yaml2json"),p=l("wsDir.yaml2json","yaml2json"),_=c("options.json.minify",!1),v=function(e,t){if(!r.has(e))return n([f],t);var o=r.get(e);return n([f],o)}("deployDir.json",["common","data"]),N=c("siteRoot","/");e.BUILD=o,e.DEPLOY_YAML2JSON_ARR=v,e.DIST=f,e.JSON_MINIFY=_,e.MODE=i,e.MODE_ENV=a,e.NODE_ENV=s,e.SITE_ROOT=N,e.WS_ROOT="src",e.WS_STATIC_ARRAY=O,e.WS_STATIC_PATH=E,e.WS_YAML2JSON_ARRAY=d,e.WS_YAML2JSON_PATH=p,e.siteRootRelative=function(e){return 0===e.length?N:N+t.relative(e)+"/"},Object.defineProperty(e,"__esModule",{value:!0})}));
