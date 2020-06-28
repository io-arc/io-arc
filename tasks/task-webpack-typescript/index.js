/*!
TypeScript compile for webpack

https://github.com/io-arc/io-arc/tree/master/tasks/tasks-webpack-typescript
Version: 0.2.1
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/env"),require("@io-arc/webpack-loaders-image"),require("webpack"),require("@io-arc/file-list"),require("@io-arc/path-build"),require("@io-arc/webpack-settings"),require("@io-arc/webpack-loaders-js"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/output-dir-diff")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/webpack-loaders-image","webpack","@io-arc/file-list","@io-arc/path-build","@io-arc/webpack-settings","@io-arc/webpack-loaders-js","@io-arc/webpack-plugins-task-message","@io-arc/output-dir-diff"],t):t((e=e||self).BuildWebpackTs={},e.env,e.webpackLoadersImage,e.webpack,e.fileList,e.PathBuild,e.webpackSettings,e.webpackLoadersJs,e.TaskMessage,e.OutputDirDiff)}(this,(function(e,t,r,a,i,s,o,p,c,n){"use strict";a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;const l=[p.TypescriptLoader()];t.USE_JS_FILE_LOADER&&l.push(r.ImageLoader(t.OUTPUT_JS_ARRAY,t.OUTPUT_IMG_ARRAY,t.IS_HASH_JS_FILE_LOADER));const u=[];if(t.JS_MINIFY){const e=require("terser-webpack-plugin");u.push(new e({parallel:!0,terserOptions:{extractComments:"all",compress:{drop_console:!0}}}))}if(t.MODE_ENV===t.MODE.ONCE){const e=new n([t.DIST,...t.OUTPUT_JS_ARRAY],[]),r=require("webpack-visualizer-plugin");u.push(new r({filename:e.targetRelativePath()+"stats/index.html"}))}const d=require("progress-bar-webpack-plugin"),f=require("prettier-webpack-plugin"),_=require("config-webpack"),w={mode:"none",context:t.WS_JS_PATH_ABSOLUTE,entry:()=>new Promise(e=>{e({...i.FileListObject(t.WS_JS_PATH_ABSOLUTE,"ts",!0),...i.FileListObject(t.WS_JS_PATH_ABSOLUTE,"tsx",!0)})}),output:{path:t.OUTPUT_JS_PATH_ABSOLUTE,filename:"[name].js",publicPath:s.relative(t.OUTPUT_JS_ARRAY),chunkFilename:"[name].js"},optimization:o.jsSplitChunks,resolve:{extensions:[".ts",".tsx",".js",".json"],alias:{"~":t.WS_ROOT_ABSOLUTE,"@":t.WS_ROOT_ABSOLUTE}},module:{exprContextCritical:!1,rules:[p.workerLoader,...l,p.yamlLoader,p.EslintLoader(t.ESLINT)]},plugins:[new c("TypeScript"),new a.DefinePlugin(o.webpackDefine),new d(o.progressBar("TypeScript")),new f({extensions:[".js",".jsx",".ts",".tsx",".yaml",".yml"]}),new _,...u],devtool:!!t.JS_SOURCE_MAP&&"source-map",cache:!0,stats:o.stats(),performance:o.performance()};e.js=w,Object.defineProperty(e,"__esModule",{value:!0})}));
