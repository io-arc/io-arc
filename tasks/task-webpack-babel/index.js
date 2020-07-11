/*!
Babel compile for webpack

https://github.com/io-arc/io-arc/tree/master/tasks/task-webpack-babel
Version: 0.2.4
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports,require("@io-arc/webpack-loaders-js"),require("@io-arc/env"),require("@io-arc/webpack-loaders-image"),require("webpack"),require("@io-arc/file-list"),require("@io-arc/path-build"),require("@io-arc/webpack-settings"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/output-dir-diff")):"function"==typeof define&&define.amd?define(["exports","@io-arc/webpack-loaders-js","@io-arc/env","@io-arc/webpack-loaders-image","webpack","@io-arc/file-list","@io-arc/path-build","@io-arc/webpack-settings","@io-arc/webpack-plugins-task-message","@io-arc/output-dir-diff"],a):a((e=e||self).BuildWebpackBabel={},e.webpackLoadersJs,e.env,e.webpackLoadersImage,e.webpack,e.fileList,e.PathBuild,e.webpackSettings,e.TaskMessage,e.OutputDirDiff)}(this,(function(e,a,r,t,i,s,o,n,l,p){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,p=p&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p;const c=[a.babelLoader];r.USE_JS_FILE_LOADER&&c.push(t.ImageLoader(r.OUTPUT_JS_ARRAY,r.OUTPUT_IMG_ARRAY,r.IS_HASH_JS_FILE_LOADER));const u=[];if(r.JS_MINIFY){const e=require("terser-webpack-plugin");u.push(new e({parallel:!0,terserOptions:{extractComments:"all",compress:{drop_console:!0}}}))}if(r.MODE_ENV===r.MODE.ONCE){const e=new p([r.DIST,...r.OUTPUT_JS_ARRAY],[]),a=require("webpack-visualizer-plugin");u.push(new a({filename:e.targetRelativePath()+"stats/index.html"}))}const d=require("progress-bar-webpack-plugin"),b=require("prettier-webpack-plugin"),f=require("config-webpack"),_={mode:"none",entry:()=>new Promise(e=>{e({...s.FileListObject(r.WS_JS_PATH_ABSOLUTE,"js",!0),...s.FileListObject(r.WS_JS_PATH_ABSOLUTE,"jsx",!0)})}),output:{path:r.OUTPUT_JS_PATH_ABSOLUTE,filename:"[name].js",publicPath:o.relative(r.OUTPUT_JS_ARRAY),chunkFilename:"[name].js"},optimization:n.jsSplitChunks,resolve:{extensions:[".js",".jsx",".json"],alias:{"~":r.WS_ROOT_ABSOLUTE,"@":r.WS_ROOT_ABSOLUTE}},module:{exprContextCritical:!1,rules:[a.workerLoader,...c,a.yamlLoader,a.EslintLoader(r.ESLINT)]},plugins:[new l("Babel"),new i.DefinePlugin(n.webpackDefine),new d(n.progressBar("Babel")),new b({extensions:[".js",".jsx",".yaml",".json"]}),new f,...u],devtool:!!r.JS_SOURCE_MAP&&"source-map",cache:!0,stats:n.stats(),performance:n.performance()};e.js=_,Object.defineProperty(e,"__esModule",{value:!0})}));
