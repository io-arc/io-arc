/*!
Sass compile for webpack

https://github.com/io-arc/io-arc/tasks/tasks-webpack-sass
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/webpack-loaders-image","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings"],s):s((e=e||self).html={},e.env,e.fileList,e.webpackLoadersImage,e.TaskMessage,e.webpackSettings)}(this,(function(e,s,r,o,a,i){"use strict";a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;const t=require("webpack-fix-style-only-entries"),c=require("mini-css-extract-plugin"),n=require("progress-bar-webpack-plugin"),p=require("optimize-css-assets-webpack-plugin"),l=require("postcss-safe-parser"),u={loader:"css-loader",options:{url:s.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0}},d={loader:c.loader,options:{hmr:!1}},m=require("autoprefixer"),_=require("css-mqpacker"),f={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>[m({grid:"autoplace",flexbox:"no-2009"}),_()]}},S=[];s.CSS_MINIFY&&S.push(new p({cssProcessorOptions:{parser:l,discardComments:{removeAll:!0}}}));const g={mode:s.NODE_ENV,context:s.WS_CSS_PATH_ABSOLUTE,watch:s.MODE_ENV===s.MODE.WATCH,entry:()=>new Promise(e=>{e(r.FileListObject(s.WS_CSS_PATH_ABSOLUTE,"s[a,c]ss"))}),output:{path:s.OUTPUT_CSS_PATH_ABSOLUTE},module:{rules:[{test:/\.s([ac])ss$/i,exclude:/node_modules/,use:[d,u,{loader:"resolve-url-loader",options:{sourceMap:!1,keepQuery:!0}},f,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded"}}}]},o.ImageLoader(s.OUTPUT_CSS_ARRAY,s.OUTPUT_IMG_ARRAY,s.IS_HASH_CSS_FILE_LOADER)]},plugins:[new a("sass"),new t({extensions:["sass","scss","css"]}),new c({filename:"[name].css",chunkFilename:"[id].css"}),new n(i.progressBar("sass")),...S],devtool:!1,cache:!0,stats:i.stats(),performance:i.performance()};e.css=g,Object.defineProperty(e,"__esModule",{value:!0})}));