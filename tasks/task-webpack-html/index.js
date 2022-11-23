/*!
@io-arc/task-webpack-html
HTML builds for webpack

Version: 1.1.1
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/webpack-html.html

Copyright (c) 2020-2022 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/utils"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings"),require("handlebars")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/utils","@io-arc/webpack-loaders-image","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings","handlebars"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackHtml={},e.env,e.fileList,e.utils,e.webpackLoadersImage,e.TaskMessage,e.webpackSettings,e.handlebars)}(this,(function(e,t,a,s,r,i,l,n){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;const o=require("extract-text-webpack-plugin"),c=require("progress-bar-webpack-plugin"),u=[],T=[];null!=r.ImageMinPlugin()&&T.push(r.ImageMinPlugin);const _=new s.WebpackExtends("html"),p=_.externals(),I=_.loaders();null!=I&&u.push(...I);const O=_.plugins();null!=O&&T.push(...O);const m={mode:t.NODE_ENV,context:t.WS_HTML_PATH_ABSOLUTE,watch:t.MODE_ENV===t.MODE.WATCH,entry:()=>new Promise((e=>{e(a.FileListObject(t.WS_HTML_PATH_ABSOLUTE,"html"))})),output:{path:t.DIST_ABSOLUTE,publicPath:"",filename:"[name].html"},externals:p,module:{rules:[{test:/\.html$/i,use:o.extract({fallback:"",publicPath:t.DIST,use:[{loader:"html-loader",options:{attributes:!!t.USE_HTML_FILE_LOADER&&{list:t.TARGET_HTML_FILE_LOADER},minimize:t.HTML_MINIFY,preprocessor:(e,a)=>{let r;try{r=n.compile(e)({IS_PRODUCTION:t.IS_PRODUCTION,SITE_TITLE:t.SITE_TITLE,SITE_URL:t.SITE_URL,SITE_AUTHOR:t.SITE_AUTHOR,SITE_DESCRIPTION:t.SITE_DESCRIPTION,SITE_ROOT:t.SITE_ROOT,CSS_DIR:s.AssetsDirPath(t.OUTPUT_CSS_ARRAY),IMG_DIR:s.AssetsDirPath(t.OUTPUT_IMG_ARRAY),JS_DIR:s.AssetsDirPath(t.OUTPUT_JS_ARRAY),JSON_DIR:s.AssetsDirPath(t.OUTPUT_JSON_ARRAY)})}catch(t){return a.emitError(t),e}return r}}}]})},r.ImageLoader([],t.OUTPUT_IMG_ARRAY,t.IS_HASH_HTML_FILE_LOADER),...u]},plugins:[new i("html"),new o({filename:"[name].html",disable:!1,allChunks:!0}),new c(l.progressBar("html")),...T],devtool:!1,cache:!0,stats:l.stats(),performance:l.performance()};e.html=m,Object.defineProperty(e,"__esModule",{value:!0})}));
