/*!
Vue.js compile for webpack

https://github.com/io-arc/io-arc/tree/master/tasks/tasks-webpack-vue
Version: 0.2.1
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("webpack"),require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/path-build"),require("@io-arc/webpack-settings"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/output-dir-diff"),require("@io-arc/webpack-loaders-js"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-loaders-pug-linter")):"function"==typeof define&&define.amd?define(["exports","webpack","@io-arc/env","@io-arc/file-list","@io-arc/path-build","@io-arc/webpack-settings","@io-arc/webpack-plugins-task-message","@io-arc/output-dir-diff","@io-arc/webpack-loaders-js","@io-arc/webpack-loaders-image","@io-arc/webpack-loaders-pug-linter"],s):s((e=e||self).BuildWebpackVue={},e.webpack,e.env,e.fileList,e.PathBuild,e.webpackSettings,e.TaskMessage,e.OutputDirDiff,e.webpackLoadersJs,e.webpackLoadersImage,e.webpackLoadersPugLinter)}(this,(function(e,s,t,r,a,o,i,l,u,p,n){"use strict";s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l;const c={loader:"css-loader",options:{url:t.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0,modules:!0}},d=require("autoprefixer"),f=require("css-mqpacker"),_={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>[d({grid:"autoplace",flexbox:"no-2009"}),f()]}},b=[];t.USE_JS_FILE_LOADER&&b.push(p.ImageLoader(t.OUTPUT_JS_ARRAY,t.OUTPUT_IMG_ARRAY,t.IS_HASH_JS_FILE_LOADER));const w=[];if(t.JS_MINIFY){const e=require("terser-webpack-plugin");w.push(new e({parallel:!0,terserOptions:{extractComments:"all",compress:{drop_console:!0}}}))}if(t.MODE_ENV===t.MODE.ONCE){const e=new l([t.DIST,...t.OUTPUT_JS_ARRAY],[]),s=require("webpack-visualizer-plugin");w.push(new s({filename:e.targetRelativePath()+"stats/index.html"}))}const O=require("progress-bar-webpack-plugin"),S=require("prettier-webpack-plugin"),m=require("vue-loader/lib/plugin"),g=require("config-webpack"),k={mode:"none",context:t.WS_JS_PATH_ABSOLUTE,entry:()=>new Promise(e=>{e(r.FileListObject(t.WS_JS_PATH_ABSOLUTE,"js",!0))}),output:{path:t.OUTPUT_JS_PATH_ABSOLUTE,filename:"[name].js",publicPath:a.relative(t.OUTPUT_JS_ARRAY),chunkFilename:"[name].js"},optimization:o.jsSplitChunks,resolve:{extensions:[".js",".jsx",".json",".vue"],alias:{vue$:"vue/dist/vue.esm.js","~":t.WS_ROOT_ABSOLUTE,"@":t.WS_ROOT_ABSOLUTE}},module:{exprContextCritical:!1,rules:[u.workerLoader,{test:/\.vue$/,loader:"vue-loader",options:{transformAssetUrls:t.VUE_LOADER_ASSETS}},{test:/\.js$/,loader:"babel-loader",exclude:e=>/node_modules/.test(e)&&!/\.vue\.js/.test(e)},{test:/\.pug$/,loader:"pug-plain-loader",options:{doctype:"html",pretty:!0}},{test:/\.css$/,use:["vue-style-loader",c,_]},{test:/\.scss$/,use:["vue-style-loader",c,_,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded"}}}]},{test:/\.sass$/,use:["vue-style-loader",c,_,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded",indentedSyntax:!0}}}]},{test:/\.styl(us)?$/,use:["vue-style-loader",c,_,{loader:"stylus-loader",options:{sourceMap:!1,"include css":!0,define:null}}]},...b,u.yamlLoader,u.EslintLoader(t.ESLINT),n.PugLintLoader(/\.vue$/,"vue-pug-lint-loader")]},plugins:[new i("Vue"),new s.DefinePlugin(o.webpackDefine),new s.ProvidePlugin({Vue:["vue/dist/vue.esm.js","default"]}),new O(o.progressBar("Vue")),new S({extensions:[".js",".jsx",".ts",".tsx",".yaml",".yml",".vue"]}),new m,new g,...w],devtool:!!t.JS_SOURCE_MAP&&"source-map",cache:!0,stats:o.stats(),performance:o.performance()};e.js=k,Object.defineProperty(e,"__esModule",{value:!0})}));
