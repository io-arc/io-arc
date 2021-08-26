/*!
@io-arc/task-webpack-typescript
TypeScript compile for webpack

Version: 1.0.2
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/webpack-typescript.html

Copyright (c) 2020-2021 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/output-dir-diff"),require("@io-arc/path-build"),require("@io-arc/utils"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-loaders-js"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings"),require("webpack")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/output-dir-diff","@io-arc/path-build","@io-arc/utils","@io-arc/webpack-loaders-image","@io-arc/webpack-loaders-js","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings","webpack"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackTs={},e.env,e.fileList,e.OutputDirDiff,e.PathBuild,e.utils,e.webpackLoadersImage,e.webpackLoadersJs,e.TaskMessage,e.webpackSettings,e.webpack)}(this,(function(e,t,a,i,r,s,o,n,l,p,c){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c;const u=[n.TypescriptLoader()];t.USE_JS_FILE_LOADER&&u.push(o.ImageLoader(t.OUTPUT_JS_ARRAY,t.OUTPUT_IMG_ARRAY,t.IS_HASH_JS_FILE_LOADER));const d=[];if(d.push(o.ImageMinPlugin),t.MODE_ENV===t.MODE.ONCE){const e=new i([t.DIST,...t.OUTPUT_JS_ARRAY],[]),a=require("webpack-visualizer-plugin");d.push(new a({filename:e.targetRelativePath()+"stats/index.html"}))}const f=require("progress-bar-webpack-plugin"),_=require("prettier-webpack-plugin"),b=require("config-webpack"),O=new s.WebpackExtends("js"),w=O.externals(),T=O.loaders();null!=T&&u.push(...T);const S=O.plugins();null!=S&&d.push(...S);const g={mode:"none",context:t.WS_JS_PATH_ABSOLUTE,externals:w,entry:()=>new Promise((e=>{e({...a.FileListObject(t.WS_JS_PATH_ABSOLUTE,"ts",!0),...a.FileListObject(t.WS_JS_PATH_ABSOLUTE,"tsx",!0)})})),output:{path:t.OUTPUT_JS_PATH_ABSOLUTE,filename:"[name].js",publicPath:r.relative(t.OUTPUT_JS_ARRAY),chunkFilename:"[name].js"},optimization:p.jsOptimization,resolve:{extensions:[".ts",".tsx",".js",".json"],alias:{"~":t.WS_ROOT_ABSOLUTE,"@":t.WS_ROOT_ABSOLUTE}},module:{exprContextCritical:!1,rules:[n.workerLoader,...u,n.yamlLoader,n.EslintLoader(t.ESLINT)]},plugins:[new l("TypeScript"),new b,new c.DefinePlugin(p.webpackDefine),new f(p.progressBar("TypeScript")),new _({extensions:[".js",".jsx",".ts",".tsx",".yaml",".yml"]}),...d],devtool:!!t.JS_SOURCE_MAP&&"source-map",cache:!0,stats:p.stats(),performance:p.performance()};e.js=g,Object.defineProperty(e,"__esModule",{value:!0})}));
