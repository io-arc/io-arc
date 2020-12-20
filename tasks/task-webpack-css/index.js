/*!
CSS build for webpack

https://github.com/io-arc/io-arc/tree/master/tasks/tasks-webpack-css
Version: 0.3.1
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/utils"),require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings")):"function"==typeof define&&define.amd?define(["exports","@io-arc/utils","@io-arc/env","@io-arc/file-list","@io-arc/webpack-loaders-image","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackCss={},e.utils,e.env,e.fileList,e.webpackLoadersImage,e.TaskMessage,e.webpackSettings)}(this,(function(e,s,r,o,i,a,t){"use strict";a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;const c={loader:"css-loader",options:{url:r.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0}},n=require("mini-css-extract-plugin"),l={loader:n.loader,options:{hmr:!1}},p=require("autoprefixer"),u=require("css-mqpacker"),d=[p({grid:"autoplace",flexbox:"no-2009"})];r.CSS_POSTCSS_MQ_PACKER&&d.push(u());const _={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>d}},S=[];if(r.CSS_MINIFY){const e=require("optimize-css-assets-webpack-plugin"),s=require("postcss-safe-parser");S.push(new e({cssProcessorOptions:{parser:s,discardComments:{removeAll:!0}}}))}const f=require("webpack-fix-style-only-entries"),m=require("progress-bar-webpack-plugin"),g=[],b=new s.WebpackExtend("css"),w=b.externals(),k=b.loaders();null!=k&&g.push(...k);const O=b.plugins();null!=O&&S.push(...O);const T={mode:r.NODE_ENV,context:r.WS_CSS_PATH_ABSOLUTE,watch:r.MODE_ENV===r.MODE.WATCH,entry:()=>new Promise(e=>{e(o.FileListObject(r.WS_CSS_PATH_ABSOLUTE,"css"))}),output:{path:r.OUTPUT_CSS_PATH_ABSOLUTE},externals:w,module:{rules:[{test:/\.css$/,exclude:/node_modules/,use:[l,c,{loader:"resolve-url-loader",options:{sourceMap:!1,keepQuery:!0}},_]},i.ImageLoader(r.OUTPUT_CSS_ARRAY,r.OUTPUT_IMG_ARRAY,r.IS_HASH_CSS_FILE_LOADER),...g]},plugins:[new a("css"),new f({extensions:["css"]}),new n({filename:"[name].css",chunkFilename:"[id].css"}),new m(t.progressBar("css")),...S],devtool:!1,cache:!0,stats:t.stats(),performance:t.performance()};e.css=T,Object.defineProperty(e,"__esModule",{value:!0})}));
