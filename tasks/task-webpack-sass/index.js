/*!
Sass compile for webpack

https://github.com/io-arc/io-arc/tree/master/tasks/tasks-webpack-sass
Version: 0.2.1
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/webpack-loaders-image","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings"],s):s((e=e||self).BuildWebpackSass={},e.env,e.fileList,e.webpackLoadersImage,e.TaskMessage,e.webpackSettings)}(this,(function(e,s,r,o,a,i){"use strict";a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;const t={loader:"css-loader",options:{url:s.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0}},c=require("mini-css-extract-plugin"),n={loader:c.loader,options:{hmr:!1}},p=require("autoprefixer"),l=require("css-mqpacker"),u={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>[p({grid:"autoplace",flexbox:"no-2009"}),l()]}},d=[];if(s.CSS_MINIFY){const e=require("optimize-css-assets-webpack-plugin"),s=require("postcss-safe-parser");d.push(new e({cssProcessorOptions:{parser:s,discardComments:{removeAll:!0}}}))}const S=require("webpack-fix-style-only-entries"),_=require("progress-bar-webpack-plugin"),f={mode:s.NODE_ENV,context:s.WS_CSS_PATH_ABSOLUTE,watch:s.MODE_ENV===s.MODE.WATCH,entry:()=>new Promise(e=>{e({...r.FileListObject(s.WS_CSS_PATH_ABSOLUTE,"sass"),...r.FileListObject(s.WS_CSS_PATH_ABSOLUTE,"scss")})}),output:{path:s.OUTPUT_CSS_PATH_ABSOLUTE},module:{rules:[{test:/\.s([ac])ss$/i,exclude:/node_modules/,use:[n,t,{loader:"resolve-url-loader",options:{sourceMap:!1,keepQuery:!0}},u,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded"}}}]},o.ImageLoader(s.OUTPUT_CSS_ARRAY,s.OUTPUT_IMG_ARRAY,s.IS_HASH_CSS_FILE_LOADER)]},plugins:[new a("sass"),new S({extensions:["sass","scss","css"]}),new c({filename:"[name].css",chunkFilename:"[id].css"}),new _(i.progressBar("sass")),...d],devtool:!1,cache:!0,stats:i.stats(),performance:i.performance()};e.css=f,Object.defineProperty(e,"__esModule",{value:!0})}));
