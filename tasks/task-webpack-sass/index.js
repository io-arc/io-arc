/*!
@io-arc/task-webpack-sass
Sass compile for webpack

Version: 1.0.3
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/webpack-sass.html

Copyright (c) 2020-2021 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/utils"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/utils","@io-arc/webpack-loaders-image","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackSass={},e.env,e.fileList,e.utils,e.webpackLoadersImage,e.TaskMessage,e.webpackSettings)}(this,(function(e,s,r,a,o,i,t){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;const n={loader:"css-loader",options:{url:s.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0}},c=require("mini-css-extract-plugin"),l={loader:c.loader,options:{hmr:!1}},p=require("autoprefixer"),u=require("css-mqpacker"),d=[p(s.CSS_POSTCSS_AUTOPREFIXER_OPTION)];s.CSS_POSTCSS_MQ_PACKER&&d.push(u());const S={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>d}},_=[];if(null!=o.ImageMinPlugin()&&_.push(o.ImageMinPlugin),s.CSS_MINIFY){const e=require("optimize-css-assets-webpack-plugin"),s=require("postcss-safe-parser");_.push(new e({cssProcessorOptions:{parser:s,discardComments:{removeAll:!0}}}))}const m=require("webpack-fix-style-only-entries"),f=require("progress-bar-webpack-plugin"),g=[],O=new a.WebpackExtends("css"),T=O.externals(),b=O.loaders();null!=b&&g.push(...b);const w=O.plugins();null!=w&&_.push(...w);const k={mode:s.NODE_ENV,context:s.WS_CSS_PATH_ABSOLUTE,watch:s.MODE_ENV===s.MODE.WATCH,entry:()=>new Promise((e=>{e({...r.FileListObject(s.WS_CSS_PATH_ABSOLUTE,"sass"),...r.FileListObject(s.WS_CSS_PATH_ABSOLUTE,"scss")})})),output:{path:s.OUTPUT_CSS_PATH_ABSOLUTE},externals:T,module:{rules:[{test:/\.s([ac])ss$/i,exclude:/node_modules/,use:[l,n,{loader:"resolve-url-loader",options:{sourceMap:!1,keepQuery:!0}},S,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded"}}}]},o.ImageLoader(s.OUTPUT_CSS_ARRAY,s.OUTPUT_IMG_ARRAY,s.IS_HASH_CSS_FILE_LOADER),...g]},plugins:[new i("sass"),new m({extensions:["sass","scss","css"]}),new c({filename:"[name].css",chunkFilename:"[id].css"}),new f(t.progressBar("sass")),..._],devtool:!1,cache:!0,stats:t.stats(),performance:t.performance()};e.css=k,Object.defineProperty(e,"__esModule",{value:!0})}));
