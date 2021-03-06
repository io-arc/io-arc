/*!
@io-arc/task-webpack-stylus
Stylus compile for webpack

Version: 1.0.1
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/webpack-stylus.html

Copyright (c) 2020-2021 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/utils"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/utils","@io-arc/webpack-loaders-image","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackStylus={},e.env,e.fileList,e.utils,e.webpackLoadersImage,e.TaskMessage,e.webpackSettings)}(this,(function(e,s,r,o,i,a,t){"use strict";a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;const l={loader:"css-loader",options:{url:s.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0}},n=require("mini-css-extract-plugin"),c={loader:n.loader,options:{hmr:!1}},u=require("autoprefixer"),p=require("css-mqpacker"),d=[u({grid:"autoplace",flexbox:"no-2009"})];s.CSS_POSTCSS_MQ_PACKER&&d.push(p());const S={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>d}},_=[];if(_.push(i.ImageMinPlugin),s.CSS_MINIFY){const e=require("optimize-css-assets-webpack-plugin"),s=require("postcss-safe-parser");_.push(new e({cssProcessorOptions:{parser:s,discardComments:{removeAll:!0}}}))}const f=require("webpack-fix-style-only-entries"),m=require("progress-bar-webpack-plugin"),g=[],b=new o.WebpackExtends("css"),w=b.externals(),k=b.loaders();null!=k&&g.push(...k);const y=b.plugins();null!=y&&_.push(...y);const O={mode:s.NODE_ENV,context:s.WS_CSS_PATH_ABSOLUTE,watch:s.MODE_ENV===s.MODE.WATCH,entry:()=>new Promise(e=>{e(r.FileListObject(s.WS_CSS_PATH_ABSOLUTE,"styl"))}),output:{path:s.OUTPUT_CSS_PATH_ABSOLUTE},externals:w,module:{rules:[{test:/\.styl$/,exclude:/node_modules/,use:[c,l,{loader:"resolve-url-loader",options:{sourceMap:!1,keepQuery:!0}},S,{loader:"stylus-loader",options:{sourceMap:!1,"include css":!0,define:null}}]},i.ImageLoader(s.OUTPUT_CSS_ARRAY,s.OUTPUT_IMG_ARRAY,s.IS_HASH_CSS_FILE_LOADER),...g]},plugins:[new a("stylus"),new f({extensions:["styl","css"]}),new n({filename:"[name].css",chunkFilename:"[id].css"}),new m(t.progressBar("stylus")),..._],devtool:!1,cache:!0,stats:t.stats(),performance:t.performance()};e.css=O,Object.defineProperty(e,"__esModule",{value:!0})}));
