/*!
Vue.js in TypeScript compile for webpack

https://github.com/io-arc/io-arc/tree/master/tasks/tasks-webpack-vue-typescript
Version: 0.3.1
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/utils"),require("webpack"),require("@io-arc/env"),require("@io-arc/webpack-loaders-image"),require("@io-arc/output-dir-diff"),require("@io-arc/file-list"),require("@io-arc/path-build"),require("@io-arc/webpack-settings"),require("@io-arc/webpack-loaders-js"),require("@io-arc/webpack-loaders-pug-linter"),require("@io-arc/webpack-plugins-task-message")):"function"==typeof define&&define.amd?define(["exports","@io-arc/utils","webpack","@io-arc/env","@io-arc/webpack-loaders-image","@io-arc/output-dir-diff","@io-arc/file-list","@io-arc/path-build","@io-arc/webpack-settings","@io-arc/webpack-loaders-js","@io-arc/webpack-loaders-pug-linter","@io-arc/webpack-plugins-task-message"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackVueTypeScript={},e.utils,e.webpack,e.env,e.webpackLoadersImage,e.OutputDirDiff,e.fileList,e.PathBuild,e.webpackSettings,e.webpackLoadersJs,e.webpackLoadersPugLinter,e.TaskMessage)}(this,(function(e,s,r,t,a,o,i,l,u,p,n,c){"use strict";r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c;const d={loader:"css-loader",options:{url:t.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0,modules:!1}},_=require("autoprefixer"),f=require("css-mqpacker"),S=[_({grid:"autoplace",flexbox:"no-2009"})];t.CSS_POSTCSS_MQ_PACKER&&S.push(f());const w={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>S}},b=[];t.USE_JS_FILE_LOADER&&b.push(a.ImageLoader(t.OUTPUT_JS_ARRAY,t.OUTPUT_IMG_ARRAY,t.IS_HASH_JS_FILE_LOADER));const O=[];if(t.JS_MINIFY){const e=require("terser-webpack-plugin");O.push(new e({parallel:!0,terserOptions:{extractComments:"all",compress:{drop_console:!0}}}))}if(t.MODE_ENV===t.MODE.ONCE){const e=require("webpack-visualizer-plugin"),s=new o([t.DIST,...t.OUTPUT_JS_ARRAY],[]);O.push(new e({filename:s.targetRelativePath()+"stats/index.html"}))}const g=require("progress-bar-webpack-plugin"),m=require("prettier-webpack-plugin"),k=require("vue-loader/lib/plugin"),T=require("config-webpack"),y=t.VUE_PUG_LINT_FILE?require(`${process.cwd()}/${t.VUE_PUG_LINT_FILE}`):null,L=new s.WebpackExtend("js"),E=L.externals(),P=L.loaders();null!=P&&b.push(...P);const v=L.plugins();null!=v&&O.push(...v);const A={mode:"none",context:t.WS_JS_PATH_ABSOLUTE,entry:()=>new Promise(e=>{e(i.FileListObject(t.WS_JS_PATH_ABSOLUTE,"ts",!0))}),output:{path:t.OUTPUT_JS_PATH_ABSOLUTE,filename:"[name].js",publicPath:l.relative(t.OUTPUT_JS_ARRAY),chunkFilename:"[name].js"},optimization:u.jsSplitChunks,resolve:{extensions:[".ts",".tsx",".js",".jsx",".json",".vue"],alias:{vue$:"vue/dist/vue.esm.js","~":t.WS_ROOT_ABSOLUTE,"@":t.WS_ROOT_ABSOLUTE}},externals:E,module:{exprContextCritical:!1,rules:[p.workerLoader,{test:/\.vue$/,loader:"vue-loader",options:{transformAssetUrls:t.VUE_LOADER_ASSETS}},p.TypescriptLoader(!0),{test:/\.pug$/,loader:"pug-plain-loader",options:{doctype:"html",pretty:!0}},{test:/\.css$/,use:["vue-style-loader",d,w]},{test:/\.scss$/,use:["vue-style-loader",d,w,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded"}}}]},{test:/\.sass$/,use:["vue-style-loader",d,w,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded",indentedSyntax:!0}}}]},{test:/\.styl(us)?$/,use:["vue-style-loader",d,w,{loader:"stylus-loader",options:{sourceMap:!1,"include css":!0,define:null}}]},...b,p.yamlLoader,p.EslintLoader(t.ESLINT),n.PugLintLoader(/\.vue$/,"vue-pug-lint-loader",y)]},plugins:[new c("Vue"),new r.DefinePlugin(u.webpackDefine),new r.ProvidePlugin({Vue:["vue/dist/vue.esm.js","default"]}),new g(u.progressBar("Vue")),new m({extensions:[".js",".jsx",".ts",".tsx",".yaml",".yml",".vue"]}),new k,new T,...O],devtool:!!t.JS_SOURCE_MAP&&"source-map",cache:!0,stats:u.stats(),performance:u.performance()};e.js=A,Object.defineProperty(e,"__esModule",{value:!0})}));
