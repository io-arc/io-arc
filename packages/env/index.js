/*!
Environment
Build environment define

https://github.com/io-arc/io-arc/tree/master/packages/env
Version: 0.2.4
License: ISC
Copyright (c) 2020 arc one
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@io-arc/path-build"),require("config")):"function"==typeof define&&define.amd?define(["exports","@io-arc/path-build","config"],e):e((t=t||self).Env={},t.PathBuild,t.config)}(this,(function(t,e,s){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s;const o={DEVELOPMENT:"development",PRODUCTION:"production",TEST:"test",NONE:"none"},i={ONCE:"once",WATCH:"watch"},_=s.has("overrideEnv")?s.get("overrideEnv"):process.env.NODE_ENV||o.DEVELOPMENT,r=process.env.MODE_ENV||i.ONCE,n=e.absolute(["src"]),S=_===o.PRODUCTION,a=(t,e)=>s.has(t)?s.get(t):e,T=a("outputDir","dist"),l=e.absolute([T]),E=(t,e)=>{if(!s.has(t))return["src",e];const o=s.get(t);return""===o?["src",e]:["src",o]},c=(t,s)=>e.relative(E(t,s)),A=E("wsDir.static","static"),O=c("wsDir.static","static"),p=E("wsDir.html","html"),u=e.relative(p),L=e.absolute(p),I=a("options.pug.php",!1),d=a("options.pug.lint",null),R=a("options.fileLoader.html.use",!0),f=a("options.fileLoader.html.hash",!0),D=a("options.fileLoader.html.target",[{tag:"img",attribute:"src",type:"src"},{tag:"img",attribute:"srcset",type:"srcset"},{tag:"img",attribute:"data-src",type:"src"},{tag:"img",attribute:"data-srcset",type:"srcset"},{tag:"source",attribute:"src",type:"src"}]),P=a("options.html.minify",!1),m=E("wsDir.css","css"),U=e.relative(m),N=e.absolute(m),g=a("options.fileLoader.css.use",!0),h=a("options.fileLoader.css.hash",!0),H=a("options.css.minify",!1),M=a("deployDir.css",["common","css"]),y=e.absolute([T,...M]),j=E("wsDir.js","js"),Y=e.relative(j),b=e.absolute(j),v=a("options.js.splitFilename",null),C=a("options.js.tsconfig","tsconfig.json"),W=a("options.js.sourceMap",!1),F=a("options.js.eslint",void 0),J=a("options.fileLoader.js.use",!0),w=a("options.fileLoader.js.hash",!0),B=a("options.js.minify",!1),V=a("deployDir.js",["common","js"]),G=e.absolute([T,...V]),x=a("options.pug.vuePugLint",null),k=(()=>{if(!a("options.fileLoader.vue.use",!0))return{};const t=a("options.fileLoader.vue.loader",null);return null===t?{video:["src","poster"],source:"src",img:"src",image:["xlink:href","href"],use:["xlink:href","href"]}:t})(),q=a("deployDir.json",["common","data"]),$=E("wsDir.yaml2json","yaml2json"),z=c("wsDir.yaml2json","yaml2json"),K=a("options.json.minify",!1),Q=[T,...q],X=(Z="wsDir.imgLoader",tt="img",e.absolute(E(Z,tt)));var Z,tt;const et=a("deployDir.img",["common","img"]),st=[T,...et],ot=a("url",""),it=a("siteRoot","/"),_t=""!==ot?ot+it.replace(/\/$/,""):"",rt=a("title",""),nt=a("author",""),St=a("description","");t.BUILD=o,t.CSS_MINIFY=H,t.DEPLOY_IMG_ARRAY=st,t.DEPLOY_YAML2JSON_ARRAY=Q,t.DIST=T,t.DIST_ABSOLUTE=l,t.ESLINT=F,t.HTML_MINIFY=P,t.IS_HASH_CSS_FILE_LOADER=h,t.IS_HASH_HTML_FILE_LOADER=f,t.IS_HASH_JS_FILE_LOADER=w,t.IS_PRODUCTION=S,t.JSON_MINIFY=K,t.JS_MINIFY=B,t.JS_SOURCE_MAP=W,t.JS_SPLIT_FILENAME=v,t.MODE=i,t.MODE_ENV=r,t.NODE_ENV=_,t.OUTPUT_CSS_ARRAY=M,t.OUTPUT_CSS_PATH_ABSOLUTE=y,t.OUTPUT_IMG_ARRAY=et,t.OUTPUT_IN_PHP=I,t.OUTPUT_JSON_ARRAY=q,t.OUTPUT_JS_ARRAY=V,t.OUTPUT_JS_PATH_ABSOLUTE=G,t.PUG_LINT_FILE=d,t.SITE_AUTHOR=nt,t.SITE_DESCRIPTION=St,t.SITE_DOMAIN=ot,t.SITE_ROOT=it,t.SITE_TITLE=rt,t.SITE_URL=_t,t.TARGET_HTML_FILE_LOADER=D,t.TSCONFIG=C,t.USE_CSS_FILE_LOADER=g,t.USE_HTML_FILE_LOADER=R,t.USE_JS_FILE_LOADER=J,t.VUE_LOADER_ASSETS=k,t.VUE_PUG_LINT_FILE=x,t.WS_CSS_ARRAY=m,t.WS_CSS_PATH=U,t.WS_CSS_PATH_ABSOLUTE=N,t.WS_HTML_ARRAY=p,t.WS_HTML_PATH=u,t.WS_HTML_PATH_ABSOLUTE=L,t.WS_IMG_PATH_ABSOLUTE=X,t.WS_JS_ARRAY=j,t.WS_JS_PATH=Y,t.WS_JS_PATH_ABSOLUTE=b,t.WS_ROOT="src",t.WS_ROOT_ABSOLUTE=n,t.WS_STATIC_ARRAY=A,t.WS_STATIC_PATH=O,t.WS_YAML2JSON_ARRAY=$,t.WS_YAML2JSON_PATH=z,Object.defineProperty(t,"__esModule",{value:!0})}));
