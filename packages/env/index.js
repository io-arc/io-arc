/*!
Environment
Build environment define

https://github.com/io-arc/io-arc/tree/master/packages/env
Version: 0.3.1
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/path-build"),require("config")):"function"==typeof define&&define.amd?define(["exports","@io-arc/path-build","config"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).Env={},e.PathBuild,e.config)}(this,(function(e,s,t){"use strict";s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;const o={DEVELOPMENT:"development",PRODUCTION:"production",TEST:"test",NONE:"none"},i={ONCE:"once",WATCH:"watch"},_=t.has("overrideEnv")?t.get("overrideEnv"):process.env.NODE_ENV||o.DEVELOPMENT,r=process.env.MODE_ENV||i.ONCE,n=s.absolute(["src"]),S=_===o.PRODUCTION,a=(e,s)=>t.has(e)?t.get(e):s,l=a("outputDir","dist"),T=s.absolute([l]),E=(e,s)=>{if(!t.has(e))return["src",s];const o=t.get(e);return""===o?["src",s]:["src",o]},c=(e,t)=>s.relative(E(e,t)),p=E("wsDir.static","static"),A=c("wsDir.static","static"),O=E("wsDir.html","html"),u=s.relative(O),L=s.absolute(O),I=a("options.pug.php",!1),d=a("options.pug.lint",null),R=a("options.fileLoader.html.use",!0),f=a("options.fileLoader.html.hash",!0),m=a("options.fileLoader.html.target",[{tag:"img",attribute:"src",type:"src"},{tag:"img",attribute:"srcset",type:"srcset"},{tag:"img",attribute:"data-src",type:"src"},{tag:"img",attribute:"data-srcset",type:"srcset"},{tag:"source",attribute:"src",type:"src"}]),P=a("options.html.minify",!1),D=E("wsDir.css","css"),U=s.relative(D),N=s.absolute(D),g=a("options.fileLoader.css.use",!0),h=a("options.fileLoader.css.hash",!0),M=a("options.css.minify",!1),H=a("options.css.postcss.mqpacker",!0),y=a("deployDir.css",["common","css"]),j=s.absolute([l,...y]),C=E("wsDir.js","js"),b=s.relative(C),Y=s.absolute(C),v=a("options.js.splitFilename",null),W=a("options.js.tsconfig","tsconfig.json"),F=a("options.js.sourceMap",!1),J=a("options.js.eslint",void 0),w=a("options.fileLoader.js.use",!0),B=a("options.fileLoader.js.hash",!0),V=a("options.js.minify",!1),G=a("options.js.terser",{parallel:!0,extractComments:"some",terserOptions:{compress:{drop_console:!0}}}),x=a("deployDir.js",["common","js"]),k=s.absolute([l,...x]),q=a("options.pug.vuePugLint",null),K=(()=>{if(!a("options.fileLoader.vue.use",!0))return{};const e=a("options.fileLoader.vue.loader",null);return null===e?{video:["src","poster"],source:"src",img:"src",image:["xlink:href","href"],use:["xlink:href","href"]}:e})(),Q=a("deployDir.json",["common","data"]),$=E("wsDir.yaml2json","yaml2json"),z=c("wsDir.yaml2json","yaml2json"),X=a("options.json.minify",!1),Z=[l,...Q],ee=(se="wsDir.imgLoader",te="img",s.absolute(E(se,te)));var se,te;const oe=a("deployDir.img",["common","img"]),ie=[l,...oe],_e=a("url",""),re=a("siteRoot","/"),ne=""!==_e?_e+re.replace(/\/$/,""):"",Se=a("title",""),ae=a("author",""),le=a("description","");e.BUILD=o,e.CSS_MINIFY=M,e.CSS_POSTCSS_MQ_PACKER=H,e.DEPLOY_IMG_ARRAY=ie,e.DEPLOY_YAML2JSON_ARRAY=Z,e.DIST=l,e.DIST_ABSOLUTE=T,e.ESLINT=J,e.HTML_MINIFY=P,e.IS_HASH_CSS_FILE_LOADER=h,e.IS_HASH_HTML_FILE_LOADER=f,e.IS_HASH_JS_FILE_LOADER=B,e.IS_PRODUCTION=S,e.JSON_MINIFY=X,e.JS_MINIFY=V,e.JS_SOURCE_MAP=F,e.JS_SPLIT_FILENAME=v,e.JS_TERSER=G,e.MODE=i,e.MODE_ENV=r,e.NODE_ENV=_,e.OUTPUT_CSS_ARRAY=y,e.OUTPUT_CSS_PATH_ABSOLUTE=j,e.OUTPUT_IMG_ARRAY=oe,e.OUTPUT_IN_PHP=I,e.OUTPUT_JSON_ARRAY=Q,e.OUTPUT_JS_ARRAY=x,e.OUTPUT_JS_PATH_ABSOLUTE=k,e.PUG_LINT_FILE=d,e.SITE_AUTHOR=ae,e.SITE_DESCRIPTION=le,e.SITE_DOMAIN=_e,e.SITE_ROOT=re,e.SITE_TITLE=Se,e.SITE_URL=ne,e.TARGET_HTML_FILE_LOADER=m,e.TSCONFIG=W,e.USE_CSS_FILE_LOADER=g,e.USE_HTML_FILE_LOADER=R,e.USE_JS_FILE_LOADER=w,e.VUE_LOADER_ASSETS=K,e.VUE_PUG_LINT_FILE=q,e.WS_CSS_ARRAY=D,e.WS_CSS_PATH=U,e.WS_CSS_PATH_ABSOLUTE=N,e.WS_HTML_ARRAY=O,e.WS_HTML_PATH=u,e.WS_HTML_PATH_ABSOLUTE=L,e.WS_IMG_PATH_ABSOLUTE=ee,e.WS_JS_ARRAY=C,e.WS_JS_PATH=b,e.WS_JS_PATH_ABSOLUTE=Y,e.WS_ROOT="src",e.WS_ROOT_ABSOLUTE=n,e.WS_STATIC_ARRAY=p,e.WS_STATIC_PATH=A,e.WS_YAML2JSON_ARRAY=$,e.WS_YAML2JSON_PATH=z,Object.defineProperty(e,"__esModule",{value:!0})}));
