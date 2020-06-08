/*!
Environment
Build environment define

https://github.com/io-arc/io-arc/packages/env
Version: 0.1.1
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/path-build"),require("config")):"function"==typeof define&&define.amd?define(["exports","@io-arc/path-build","config"],t):t((e=e||self).Env={},e.PathBuild,e.config)}(this,(function(e,t,s){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s;const o={DEVELOPMENT:"development",PRODUCTION:"production",TEST:"test",NONE:"none"},i={ONCE:"once",WATCH:"watch"},_=s.has("overrideEnv")?s.get("overrideEnv"):process.env.NODE_ENV||o.DEVELOPMENT,r=process.env.MODE_ENV||i.ONCE,S=t.absolute(["src"]),n=_===o.PRODUCTION,a=(e,t)=>s.has(e)?s.get(e):t,T=a("outputDir","dist"),l=t.absolute([T]),E=(e,t)=>{if(!s.has(e))return["src",t];const o=s.get(e);return""===o?["src",t]:["src",o]},c=(e,s)=>t.relative(E(e,s)),A=E("wsDir.static","static"),O=c("wsDir.static","static"),p=E("wsDir.html","html"),u=t.relative(p),L=t.absolute(p),I=a("options.pug.php",!1),d=a("options.fileLoader.html.use",!0),R=a("options.fileLoader.html.hash",!0),f=a("options.fileLoader.html.target",[{tag:"img",attribute:"src",type:"src"},{tag:"img",attribute:"srcset",type:"srcset"},{tag:"img",attribute:"data-src",type:"src"},{tag:"img",attribute:"data-srcset",type:"srcset"},{tag:"source",attribute:"src",type:"src"}]),D=a("options.html.minify",!1),m=E("wsDir.css","css"),P=t.relative(m),U=t.absolute(m),N=a("options.fileLoader.css.use",!0),h=a("options.fileLoader.css.hash",!0),H=a("options.css.minify",!1),M=a("deployDir.css",["common","css"]),g=t.absolute([T,...M]),y=E("wsDir.js","js"),j=t.relative(y),Y=t.absolute(y),b=a("options.js.splitFilename",null),C=a("options.js.tsconfig","tsconfig.json"),v=a("options.js.sourceMap",!1),W=a("options.js.eslint",void 0),J=a("options.fileLoader.js.use",!0),F=a("options.fileLoader.js.hash",!0),w=a("options.js.minify",!1),B=a("deployDir.js",["common","js"]),V=t.absolute([T,...B]),x=(()=>{if(!a("options.fileLoader.vue.use",!0))return{};const e=a("options.fileLoader.vue.loader",null);return null===e?{video:["src","poster"],source:"src",img:"src",image:["xlink:href","href"],use:["xlink:href","href"]}:e})(),G=a("deployDir.json",["common","data"]),k=E("wsDir.yaml2json","yaml2json"),q=c("wsDir.yaml2json","yaml2json"),$=a("options.json.minify",!1),z=[T,...G],K=(Q="wsDir.imgLoader",X="img",t.absolute(E(Q,X)));var Q,X;const Z=a("deployDir.img",["common","img"]),ee=[T,...Z],te=a("url",""),se=a("siteRoot","/"),oe=""!==te?te+se.replace(/\/$/,""):"",ie=a("title",""),_e=a("author",""),re=a("description","");e.BUILD=o,e.CSS_MINIFY=H,e.DEPLOY_IMG_ARRAY=ee,e.DEPLOY_YAML2JSON_ARRAY=z,e.DIST=T,e.DIST_ABSOLUTE=l,e.ESLINT=W,e.HTML_MINIFY=D,e.IS_HASH_CSS_FILE_LOADER=h,e.IS_HASH_HTML_FILE_LOADER=R,e.IS_HASH_JS_FILE_LOADER=F,e.IS_PRODUCTION=n,e.JSON_MINIFY=$,e.JS_MINIFY=w,e.JS_SOURCE_MAP=v,e.JS_SPLIT_FILENAME=b,e.MODE=i,e.MODE_ENV=r,e.NODE_ENV=_,e.OUTPUT_CSS_ARRAY=M,e.OUTPUT_CSS_PATH_ABSOLUTE=g,e.OUTPUT_IMG_ARRAY=Z,e.OUTPUT_IN_PHP=I,e.OUTPUT_JSON_ARRAY=G,e.OUTPUT_JS_ARRAY=B,e.OUTPUT_JS_PATH_ABSOLUTE=V,e.SITE_AUTHOR=_e,e.SITE_DESCRIPTION=re,e.SITE_DOMAIN=te,e.SITE_ROOT=se,e.SITE_TITLE=ie,e.SITE_URL=oe,e.TARGET_HTML_FILE_LOADER=f,e.TSCONFIG=C,e.USE_CSS_FILE_LOADER=N,e.USE_HTML_FILE_LOADER=d,e.USE_JS_FILE_LOADER=J,e.VUE_LOADER_ASSETS=x,e.WS_CSS_ARRAY=m,e.WS_CSS_PATH=P,e.WS_CSS_PATH_ABSOLUTE=U,e.WS_HTML_ARRAY=p,e.WS_HTML_PATH=u,e.WS_HTML_PATH_ABSOLUTE=L,e.WS_IMG_PATH_ABSOLUTE=K,e.WS_JS_ARRAY=y,e.WS_JS_PATH=j,e.WS_JS_PATH_ABSOLUTE=Y,e.WS_ROOT="src",e.WS_ROOT_ABSOLUTE=S,e.WS_STATIC_ARRAY=A,e.WS_STATIC_PATH=O,e.WS_YAML2JSON_ARRAY=k,e.WS_YAML2JSON_PATH=q,Object.defineProperty(e,"__esModule",{value:!0})}));
