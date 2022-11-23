/*!
@io-arc/task-webpack-vue
Vue.js compile for webpack

Version: 1.0.3
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/webpack-vue.html

Copyright (c) 2020-2021 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/output-dir-diff"),require("@io-arc/path-build"),require("@io-arc/utils"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-loaders-js"),require("@io-arc/webpack-loaders-pug-linter"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings"),require("webpack")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/output-dir-diff","@io-arc/path-build","@io-arc/utils","@io-arc/webpack-loaders-image","@io-arc/webpack-loaders-js","@io-arc/webpack-loaders-pug-linter","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings","webpack"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackVue={},e.env,e.fileList,e.OutputDirDiff,e.PathBuild,e.utils,e.webpackLoadersImage,e.webpackLoadersJs,e.webpackLoadersPugLinter,e.TaskMessage,e.webpackSettings,e.webpack)}(this,(function(e,s,t,a,r,o,i,l,u,n,p,c){"use strict";a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c;const d={loader:"css-loader",options:{url:s.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0,modules:!1}},_=require("autoprefixer"),S=require("css-mqpacker"),f=[_(s.CSS_POSTCSS_AUTOPREFIXER_OPTION)];s.CSS_POSTCSS_MQ_PACKER&&f.push(S());const O={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>f}},b=[];s.USE_JS_FILE_LOADER&&b.push(i.ImageLoader(s.OUTPUT_JS_ARRAY,s.OUTPUT_IMG_ARRAY,s.IS_HASH_JS_FILE_LOADER));const w=[];if(null!=i.ImageMinPlugin()&&w.push(i.ImageMinPlugin),s.MODE_ENV===s.MODE.ONCE){const e=new a([s.DIST,...s.OUTPUT_JS_ARRAY],[]),t=require("webpack-visualizer-plugin");w.push(new t({filename:e.targetRelativePath()+"stats/index.html"}))}const g=require("progress-bar-webpack-plugin"),m=require("prettier-webpack-plugin"),P=require("vue-loader/lib/plugin"),T=require("config-webpack"),E=s.VUE_PUG_LINT_FILE?require(`${process.cwd()}/${s.VUE_PUG_LINT_FILE}`):null,k=new o.WebpackExtends("js"),L=k.externals(),y=k.loaders();null!=y&&b.push(...y);const v=k.plugins();null!=v&&w.push(...v);const A={mode:"none",context:s.WS_JS_PATH_ABSOLUTE,entry:()=>new Promise((e=>{e(t.FileListObject(s.WS_JS_PATH_ABSOLUTE,"js",!0))})),output:{path:s.OUTPUT_JS_PATH_ABSOLUTE,filename:"[name].js",publicPath:r.relative(s.OUTPUT_JS_ARRAY),chunkFilename:"[name].js"},optimization:p.jsOptimization,externals:L,resolve:{extensions:[".js",".jsx",".json",".vue"],alias:{vue$:"vue/dist/vue.esm.js","~":s.WS_ROOT_ABSOLUTE,"@":s.WS_ROOT_ABSOLUTE}},module:{exprContextCritical:!1,rules:[l.workerLoader,{test:/\.vue$/,loader:"vue-loader",options:{transformAssetUrls:s.VUE_LOADER_ASSETS}},{test:/\.js$/,loader:"babel-loader",exclude:e=>/node_modules/.test(e)&&!/\.vue\.js/.test(e)},{test:/\.pug$/,loader:"pug-plain-loader",options:{doctype:"html",pretty:!0}},{test:/\.css$/,use:["vue-style-loader",d,O]},{test:/\.scss$/,use:["vue-style-loader",d,O,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded"}}}]},{test:/\.sass$/,use:["vue-style-loader",d,O,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded",indentedSyntax:!0}}}]},{test:/\.styl(us)?$/,use:["vue-style-loader",d,O,{loader:"stylus-loader",options:{sourceMap:!1,"include css":!0,define:null}}]},...b,l.yamlLoader,l.EslintLoader(s.ESLINT),u.PugLintLoader(/\.vue$/,"vue-pug-lint-loader",E)]},plugins:[new n("Vue"),new c.DefinePlugin(p.webpackDefine),new c.ProvidePlugin({Vue:["vue/dist/vue.esm.js","default"]}),new g(p.progressBar("Vue")),new m({extensions:[".js",".jsx",".ts",".tsx",".yaml",".yml",".vue"]}),new P,new T,...w],devtool:!!s.JS_SOURCE_MAP&&"source-map",cache:!0,stats:p.stats(),performance:p.performance()};e.js=A,Object.defineProperty(e,"__esModule",{value:!0})}));
