/*!
Environment
Build environment define

https://github.com/io-arc/io-arc/packages/env
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@io-arc/path-build"),require("config")):"function"==typeof define&&define.amd?define(["exports","@io-arc/path-build","config"],e):e((t=t||self).Env={},t.PathBuild,t.config)}(this,(function(t,e,s){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s;const o={DEVELOPMENT:"development",PRODUCTION:"production",TEST:"test",NONE:"none"},_={ONCE:"once",WATCH:"watch"},i=s.has("overrideEnv")?s.get("overrideEnv"):process.env.NODE_ENV||o.DEVELOPMENT,r=process.env.MODE_ENV||_.ONCE,S=i===o.PRODUCTION,a=(t,e)=>s.has(t)?s.get(t):e,T=a("outputDir","dist"),n=e.absolute([T]),A=(t,e)=>{if(!s.has(t))return["src",e];const o=s.get(t);return""===o?["src",e]:["src",o]},c=(t,s)=>e.relative(A(t,s)),E=A("wsDir.static","static"),O=c("wsDir.static","static"),l=A("wsDir.html","html"),p=e.relative(l),L=e.absolute(l),I=a("options.pug.php",!1),u=a("options.fileLoader.html.use",!0),R=a("options.fileLoader.html.hash",!0),d=a("options.fileLoader.html.target",[{tag:"img",attribute:"src",type:"src"},{tag:"img",attribute:"srcset",type:"srcset"},{tag:"img",attribute:"data-src",type:"src"},{tag:"img",attribute:"data-srcset",type:"srcset"},{tag:"source",attribute:"src",type:"src"}]),D=a("options.html.minify",!1),f=A("wsDir.css","css"),m=e.relative(f),P=e.absolute(f),U=a("options.fileLoader.css.use",!0),N=a("options.fileLoader.css.hash",!0),H=a("options.css.minify",!1),y=a("deployDir.css",["common","css"]),h=e.absolute([T,...y]),M=A("wsDir.js","js"),g=e.relative(M),Y=e.absolute(M),j=a("options.js.tsconfig","tsconfig.json"),b=a("options.fileLoader.js.use",!0),C=a("options.fileLoader.js.hash",!0),W=a("options.js.minify",!1),v=a("deployDir.js",["common","js"]),J=e.absolute([T,...v]),F=a("deployDir.json",["common","data"]),w=A("wsDir.yaml2json","yaml2json"),B=c("wsDir.yaml2json","yaml2json"),V=a("options.json.minify",!1),G=[T,...F],x=(q="wsDir.imgLoader",$="img",e.absolute(A(q,$)));var q,$;const k=a("deployDir.img",["common","img"]),z=[T,...k],K=a("url",""),Q=a("siteRoot","/"),X=""!==K?K+Q.replace(/\/$/,""):"",Z=a("title",""),tt=a("author",""),et=a("description","");t.BUILD=o,t.CSS_MINIFY=H,t.DEPLOY_IMG_ARRAY=z,t.DEPLOY_YAML2JSON_ARRAY=G,t.DIST=T,t.DIST_ABSOLUTE=n,t.HTML_MINIFY=D,t.IS_HASH_CSS_FILE_LOADER=N,t.IS_HASH_HTML_FILE_LOADER=R,t.IS_HASH_JS_FILE_LOADER=C,t.IS_PRODUCTION=S,t.JSON_MINIFY=V,t.JS_MINIFY=W,t.MODE=_,t.MODE_ENV=r,t.NODE_ENV=i,t.OUTPUT_CSS_ARRAY=y,t.OUTPUT_CSS_PATH_ABSOLUTE=h,t.OUTPUT_IMG_ARRAY=k,t.OUTPUT_IN_PHP=I,t.OUTPUT_JSON_ARRAY=F,t.OUTPUT_JS_ARRAY=v,t.OUTPUT_JS_PATH_ABSOLUTE=J,t.SITE_AUTHOR=tt,t.SITE_DESCRIPTION=et,t.SITE_DOMAIN=K,t.SITE_ROOT=Q,t.SITE_TITLE=Z,t.SITE_URL=X,t.TARGET_HTML_FILE_LOADER=d,t.TSCONFIG=j,t.USE_CSS_FILE_LOADER=U,t.USE_HTML_FILE_LOADER=u,t.USE_JS_FILE_LOADER=b,t.WS_CSS_ARRAY=f,t.WS_CSS_PATH=m,t.WS_CSS_PATH_ABSOLUTE=P,t.WS_HTML_ARRAY=l,t.WS_HTML_PATH=p,t.WS_HTML_PATH_ABSOLUTE=L,t.WS_IMG_PATH_ABSOLUTE=x,t.WS_JS_ARRAY=M,t.WS_JS_PATH=g,t.WS_JS_PATH_ABSOLUTE=Y,t.WS_ROOT="src",t.WS_STATIC_ARRAY=E,t.WS_STATIC_PATH=O,t.WS_YAML2JSON_ARRAY=w,t.WS_YAML2JSON_PATH=B,Object.defineProperty(t,"__esModule",{value:!0})}));
