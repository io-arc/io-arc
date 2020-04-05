/*!
Environment
Build environment define

https://github.com/io-arc/io-arc/packages/env
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/path-build"),require("config")):"function"==typeof define&&define.amd?define(["exports","@io-arc/path-build","config"],t):t((e=e||self).Env={},e.PathBuild,e.config)}(this,(function(e,t,o){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;const i={DEVELOPMENT:"development",PRODUCTION:"production",TEST:"test",NONE:"none"},r={ONCE:"once",WATCH:"watch"},s=o.has("overrideEnv")?o.get("overrideEnv"):process.env.NODE_ENV||i.DEVELOPMENT,n=process.env.MODE_ENV||r.ONCE,a=(e,t)=>o.has(e)?o.get(e):t,c=a("outputDir","dist"),O=(e,t)=>{if(!o.has(e))return["src",t];const i=o.get(e);return""===i?["src",t]:["src",i]},l=(e,o)=>t.relative(O(e,o)),E=(e,t)=>{if(!o.has(e))return[c,...t];const i=o.get(e);return[c,...i]},d=O("wsDir.static","static"),u=l("wsDir.static","static"),_=O("wsDir.yaml2json","yaml2json"),p=l("wsDir.yaml2json","yaml2json"),f=a("options.json.minify",!1),D=E("deployDir.json",["common","data"]),N=(T="wsDir.imgLoader",A="img",t.absolute(O(T,A)));var T,A;const m=E("deployDir.img",["common","img"]),S=a("siteRoot","/");e.BUILD=i,e.DEPLOY_IMG_ARRAY=m,e.DEPLOY_YAML2JSON_ARR=D,e.DIST=c,e.JSON_MINIFY=f,e.MODE=r,e.MODE_ENV=n,e.NODE_ENV=s,e.SITE_ROOT=S,e.WS_IMG_PATH_ABSOLUTE=N,e.WS_ROOT="src",e.WS_STATIC_ARRAY=d,e.WS_STATIC_PATH=u,e.WS_YAML2JSON_ARRAY=_,e.WS_YAML2JSON_PATH=p,e.siteRootRelative=e=>0===e.length?S:`${S+t.relative(e)}/`,Object.defineProperty(e,"__esModule",{value:!0})}));
