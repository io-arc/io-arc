/*!
@io-arc/task-webpack-css
CSS build for webpack

Version: 0.4.0
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://github.com/io-arc/io-arc/tree/master/tasks/tasks-webpack-css

Copyright (c) 2020-2021 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/utils"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/utils","@io-arc/webpack-loaders-image","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackCss={},e.env,e.fileList,e.utils,e.webpackLoadersImage,e.TaskMessage,e.webpackSettings)}(this,(function(e,s,r,o,i,a,t){"use strict";a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;const c={loader:"css-loader",options:{url:s.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0}},n=require("mini-css-extract-plugin"),l={loader:n.loader,options:{hmr:!1}},p=require("autoprefixer"),u=require("css-mqpacker"),d=[p({grid:"autoplace",flexbox:"no-2009"})];s.CSS_POSTCSS_MQ_PACKER&&d.push(u());const _={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>d}},S=[];if(S.push(i.ImageMinPlugin),s.CSS_MINIFY){const e=require("optimize-css-assets-webpack-plugin"),s=require("postcss-safe-parser");S.push(new e({cssProcessorOptions:{parser:s,discardComments:{removeAll:!0}}}))}const f=require("webpack-fix-style-only-entries"),m=require("progress-bar-webpack-plugin"),g=[],b=new o.WebpackExtends("css"),w=b.externals(),k=b.loaders();null!=k&&g.push(...k);const O=b.plugins();null!=O&&S.push(...O);const T={mode:s.NODE_ENV,context:s.WS_CSS_PATH_ABSOLUTE,watch:s.MODE_ENV===s.MODE.WATCH,entry:()=>new Promise(e=>{e(r.FileListObject(s.WS_CSS_PATH_ABSOLUTE,"css"))}),output:{path:s.OUTPUT_CSS_PATH_ABSOLUTE},externals:w,module:{rules:[{test:/\.css$/,exclude:/node_modules/,use:[l,c,{loader:"resolve-url-loader",options:{sourceMap:!1,keepQuery:!0}},_]},i.ImageLoader(s.OUTPUT_CSS_ARRAY,s.OUTPUT_IMG_ARRAY,s.IS_HASH_CSS_FILE_LOADER),...g]},plugins:[new a("css"),new f({extensions:["css"]}),new n({filename:"[name].css",chunkFilename:"[id].css"}),new m(t.progressBar("css")),...S],devtool:!1,cache:!0,stats:t.stats(),performance:t.performance()};e.css=T,Object.defineProperty(e,"__esModule",{value:!0})}));
