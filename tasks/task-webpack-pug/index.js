/*!
Pug compile for webpack

https://github.com/io-arc/io-arc/tree/master/tasks/tasks-webpack-pug
Version: 0.4.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/read-yaml"),require("@io-arc/utils"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-loaders-pug-linter"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings"),require("config")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/read-yaml","@io-arc/utils","@io-arc/webpack-loaders-image","@io-arc/webpack-loaders-pug-linter","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings","config"],a):a((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackPug={},e.env,e.fileList,e.readYaml,e.utils,e.webpackLoadersImage,e.webpackLoadersPugLinter,e.TaskMessage,e.webpackSettings,e.config)}(this,(function(e,a,t,r,i,s,l,o,p,n){"use strict";o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;const c={loader:"html-loader",options:{attributes:!!a.USE_HTML_FILE_LOADER&&{list:a.TARGET_HTML_FILE_LOADER}}},u=require("pug-php-filter"),T={loader:"pug-html-loader",options:{doctype:"html",pretty:!a.HTML_MINIFY,cache:!0,filters:{php:u},data:{IS_PRODUCTION:a.IS_PRODUCTION,SITE_TITLE:a.SITE_TITLE,SITE_URL:a.SITE_URL,SITE_AUTHOR:a.SITE_AUTHOR,SITE_DESCRIPTION:a.SITE_DESCRIPTION,SITE_ROOT:a.SITE_ROOT,CSS_DIR:i.AssetsDirPath(a.OUTPUT_CSS_ARRAY),IMG_DIR:i.AssetsDirPath(a.OUTPUT_IMG_ARRAY),JS_DIR:i.AssetsDirPath(a.OUTPUT_JS_ARRAY),JSON_DIR:i.AssetsDirPath(a.OUTPUT_JSON_ARRAY),readYAML:e=>{const t=e.split("/"),i=t.pop();if(void 0===i||!/ya?ml$/i.test(i))return"";const s=i.replace(/.ya?ml$/i,"");return r.ReadYaml(s,[a.WS_HTML_PATH_ABSOLUTE,...t])},config:e=>n.has(e)?n.get(e):null}}},_=a.OUTPUT_IN_PHP?"php":"html",d=require("extract-text-webpack-plugin"),I=require("progress-bar-webpack-plugin"),g=a.PUG_LINT_FILE?require(`${process.cwd()}/${a.PUG_LINT_FILE}`):null,O=[],S=[];S.push(s.ImageMinPlugin);const E=new i.WebpackExtends("html"),L=E.externals(),f=E.loaders();null!=f&&O.push(...f);const P=E.plugins();null!=P&&S.push(...P);const m={mode:a.NODE_ENV,context:a.WS_HTML_PATH_ABSOLUTE,watch:a.MODE_ENV===a.MODE.WATCH,entry:()=>new Promise(e=>{e(t.FileListObject(a.WS_HTML_PATH_ABSOLUTE,"pug"))}),output:{path:a.DIST_ABSOLUTE,publicPath:"",filename:`[name].${_}`},externals:L,module:{rules:[l.PugLintLoader(/^(?!_).*\.pug$/i,"pug-lint-loader",g),{test:/\.pug$/i,use:d.extract({fallback:"",publicPath:a.DIST,use:[c,T]})},s.ImageLoader([],a.OUTPUT_IMG_ARRAY,a.IS_HASH_HTML_FILE_LOADER),...O]},plugins:[new o("pug"),new d({filename:`[name].${_}`,disable:!1,allChunks:!0}),new I(p.progressBar("pug")),...S],devtool:!1,cache:!0,stats:p.stats(),performance:p.performance()};e.html=m,Object.defineProperty(e,"__esModule",{value:!0})}));
