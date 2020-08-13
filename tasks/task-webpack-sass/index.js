/*!
Sass compile for webpack

https://github.com/io-arc/io-arc/tree/master/tasks/tasks-webpack-sass
Version: 0.2.6
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/utils"),require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings")):"function"==typeof define&&define.amd?define(["exports","@io-arc/utils","@io-arc/env","@io-arc/file-list","@io-arc/webpack-loaders-image","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackSass={},e.utils,e.env,e.fileList,e.webpackLoadersImage,e.TaskMessage,e.webpackSettings)}(this,(function(e,s,r,o,a,i,t){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;const c={loader:"css-loader",options:{url:r.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0}},n=require("mini-css-extract-plugin"),l={loader:n.loader,options:{hmr:!1}},p=require("autoprefixer"),u=require("css-mqpacker"),d={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>[p({grid:"autoplace",flexbox:"no-2009"}),u()]}},S=[];if(r.CSS_MINIFY){const e=require("optimize-css-assets-webpack-plugin"),s=require("postcss-safe-parser");S.push(new e({cssProcessorOptions:{parser:s,discardComments:{removeAll:!0}}}))}const _=require("webpack-fix-style-only-entries"),f=require("progress-bar-webpack-plugin"),m=[],g=new s.WebpackExtend("css"),b=g.externals(),w=g.loaders();null!=w&&m.push(...w);const k=g.plugins();null!=k&&S.push(...k);const O={mode:r.NODE_ENV,context:r.WS_CSS_PATH_ABSOLUTE,watch:r.MODE_ENV===r.MODE.WATCH,entry:()=>new Promise(e=>{e({...o.FileListObject(r.WS_CSS_PATH_ABSOLUTE,"sass"),...o.FileListObject(r.WS_CSS_PATH_ABSOLUTE,"scss")})}),output:{path:r.OUTPUT_CSS_PATH_ABSOLUTE},externals:b,module:{rules:[{test:/\.s([ac])ss$/i,exclude:/node_modules/,use:[l,c,{loader:"resolve-url-loader",options:{sourceMap:!1,keepQuery:!0}},d,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded"}}}]},a.ImageLoader(r.OUTPUT_CSS_ARRAY,r.OUTPUT_IMG_ARRAY,r.IS_HASH_CSS_FILE_LOADER),...m]},plugins:[new i("sass"),new _({extensions:["sass","scss","css"]}),new n({filename:"[name].css",chunkFilename:"[id].css"}),new f(t.progressBar("sass")),...S],devtool:!1,cache:!0,stats:t.stats(),performance:t.performance()};e.css=O,Object.defineProperty(e,"__esModule",{value:!0})}));
