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
function o(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<r;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,n++)o[n]=i[s];return o}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;var n,i,s={DEVELOPMENT:"development",PRODUCTION:"production",TEST:"test",NONE:"none"},a={ONCE:"once",WATCH:"watch"},c=r.has("overrideEnv")?r.get("overrideEnv"):process.env.NODE_ENV||s.DEVELOPMENT,u=process.env.MODE_ENV||a.ONCE,f=function(e,t){return r.has(e)?r.get(e):t},l=function(e,t){if(!r.has(e))return["src",t];var o=r.get(e);return""===o?["src",t]:["src",o]},O=f("outputDir","dist"),E=function(e,r){return t.relative(l(e,r))},d=function(e,t){if(!r.has(e))return o([O],t);var n=r.get(e);return o([O],n)},_=l("wsDir.static","static"),p=E("wsDir.static","static"),D=l("wsDir.yaml2json","yaml2json"),v=E("wsDir.yaml2json","yaml2json"),A=f("options.json.minify",!1),N=d("deployDir.json",["common","data"]),T=(n="wsDir.imgLoader",i="img",t.absolute(l(n,i))),m=d("deployDir.img",["common","img"]),y=f("siteRoot","/");e.BUILD=s,e.DEPLOY_IMG_ARRAY=m,e.DEPLOY_YAML2JSON_ARR=N,e.DIST=O,e.JSON_MINIFY=A,e.MODE=a,e.MODE_ENV=u,e.NODE_ENV=c,e.SITE_ROOT=y,e.WS_IMG_PATH_ABSOLUTE=T,e.WS_ROOT="src",e.WS_STATIC_ARRAY=_,e.WS_STATIC_PATH=p,e.WS_YAML2JSON_ARRAY=D,e.WS_YAML2JSON_PATH=v,e.siteRootRelative=function(e){return 0===e.length?y:y+t.relative(e)+"/"},Object.defineProperty(e,"__esModule",{value:!0})}));
