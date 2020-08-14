/*!
Pug compile for webpack

https://github.com/io-arc/io-arc/tree/master/tasks/tasks-webpack-pug
Version: 0.3.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/utils"),require("@io-arc/read-yaml"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings"),require("@io-arc/webpack-loaders-pug-linter")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/utils","@io-arc/read-yaml","@io-arc/webpack-loaders-image","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings","@io-arc/webpack-loaders-pug-linter"],a):a((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackPug={},e.env,e.fileList,e.utils,e.readYaml,e.webpackLoadersImage,e.TaskMessage,e.webpackSettings,e.webpackLoadersPugLinter)}(this,(function(e,a,t,r,i,s,l,o,p){"use strict";l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l;const u={loader:"html-loader",options:{attributes:!!a.USE_HTML_FILE_LOADER&&{list:a.TARGET_HTML_FILE_LOADER}}},c=require("pug-php-filter"),n={loader:"pug-html-loader",options:{doctype:"html",pretty:!a.HTML_MINIFY,cache:!0,filters:{php:c},data:{IS_PRODUCTION:a.IS_PRODUCTION,SITE_TITLE:a.SITE_TITLE,SITE_URL:a.SITE_URL,SITE_AUTHOR:a.SITE_AUTHOR,SITE_DESCRIPTION:a.SITE_DESCRIPTION,SITE_ROOT:a.SITE_ROOT,CSS_DIR:r.AssetsDirPath(a.OUTPUT_CSS_ARRAY),IMG_DIR:r.AssetsDirPath(a.OUTPUT_IMG_ARRAY),JS_DIR:r.AssetsDirPath(a.OUTPUT_JS_ARRAY),JSON_DIR:r.AssetsDirPath(a.OUTPUT_JSON_ARRAY),readYAML:e=>{const t=e.split("/"),r=t.pop();if(void 0===r||!/ya?ml$/i.test(r))return"";const s=r.replace(/.ya?ml$/i,"");return i.ReadYaml(s,[a.WS_HTML_PATH_ABSOLUTE,...t])}}}},T=a.OUTPUT_IN_PHP?"php":"html",_=require("extract-text-webpack-plugin"),d=require("progress-bar-webpack-plugin"),I=a.PUG_LINT_FILE?require(`${process.cwd()}/${a.PUG_LINT_FILE}`):null,S=[],E=[],L=new r.WebpackExtend("html"),O=L.externals(),g=L.loaders();null!=g&&S.push(...g);const A=L.plugins();null!=A&&E.push(...A);const m={mode:a.NODE_ENV,context:a.WS_HTML_PATH_ABSOLUTE,watch:a.MODE_ENV===a.MODE.WATCH,entry:()=>new Promise(e=>{e(t.FileListObject(a.WS_HTML_PATH_ABSOLUTE,"pug"))}),output:{path:a.DIST_ABSOLUTE,publicPath:"",filename:`[name].${T}`},externals:O,module:{rules:[p.PugLintLoader(/^(?!_).*\.pug$/i,"pug-lint-loader",I),{test:/\.pug$/i,use:_.extract({fallback:"",publicPath:a.DIST,use:[u,n]})},s.ImageLoader([],a.OUTPUT_IMG_ARRAY,a.IS_HASH_HTML_FILE_LOADER),...S]},plugins:[new l("pug"),new _({filename:`[name].${T}`,disable:!1,allChunks:!0}),new d(o.progressBar("pug")),...E],devtool:!1,cache:!0,stats:o.stats(),performance:o.performance()};e.html=m,Object.defineProperty(e,"__esModule",{value:!0})}));
