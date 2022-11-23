/*!
@io-arc/task-webpack-css
CSS build for webpack

Version: 1.1.0
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/webpack-css.html

Copyright (c) 2020-2022 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/utils"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/utils","@io-arc/webpack-loaders-image","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackCss={},e.env,e.fileList,e.utils,e.webpackLoadersImage,e.TaskMessage,e.webpackSettings)}(this,(function(e,s,r,i,o,a,t){"use strict";a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;const n={loader:"css-loader",options:{url:s.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0}},c=require("mini-css-extract-plugin"),l={loader:c.loader,options:{hmr:!1}},u=require("autoprefixer"),p=require("css-mqpacker"),d=[u(s.CSS_POSTCSS_AUTOPREFIXER_OPTION)];s.CSS_POSTCSS_MQ_PACKER&&d.push(p());const S={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>d}},_=[];if(null!=o.ImageMinPlugin()&&_.push(o.ImageMinPlugin),s.CSS_MINIFY){const e=require("optimize-css-assets-webpack-plugin"),s=require("postcss-safe-parser");_.push(new e({cssProcessorOptions:{parser:s,discardComments:{removeAll:!0}}}))}const m=require("webpack-fix-style-only-entries"),f=require("progress-bar-webpack-plugin"),g=[],O=new i.WebpackExtends("css"),b=O.externals(),w=O.loaders();null!=w&&g.push(...w);const T=O.plugins();null!=T&&_.push(...T);const k={mode:s.NODE_ENV,context:s.WS_CSS_PATH_ABSOLUTE,watch:s.MODE_ENV===s.MODE.WATCH,entry:()=>new Promise((e=>{e(r.FileListObject(s.WS_CSS_PATH_ABSOLUTE,"css"))})),output:{path:s.OUTPUT_CSS_PATH_ABSOLUTE},externals:b,module:{rules:[{test:/\.css$/,exclude:/node_modules/,use:[l,n,{loader:"resolve-url-loader",options:{sourceMap:!1,keepQuery:!0}},S]},o.ImageLoader(s.OUTPUT_CSS_ARRAY,s.OUTPUT_IMG_ARRAY,s.IS_HASH_CSS_FILE_LOADER),...g]},plugins:[new a("css"),new m({extensions:["css"]}),new c({filename:"[name].css",chunkFilename:"[id].css"}),new f(t.progressBar("css")),..._],devtool:!1,cache:!0,stats:t.stats(),performance:t.performance()};e.css=k,Object.defineProperty(e,"__esModule",{value:!0})}));
