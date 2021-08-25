/*!
@io-arc/task-webpack-vue
Vue.js compile for webpack

Version: 1.0.1
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/webpack-vue.html

Copyright (c) 2020-2021 arc one
*/
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("@io-arc/env"),require("@io-arc/file-list"),require("@io-arc/output-dir-diff"),require("@io-arc/path-build"),require("@io-arc/utils"),require("@io-arc/webpack-loaders-image"),require("@io-arc/webpack-loaders-js"),require("@io-arc/webpack-loaders-pug-linter"),require("@io-arc/webpack-plugins-task-message"),require("@io-arc/webpack-settings"),require("webpack")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/file-list","@io-arc/output-dir-diff","@io-arc/path-build","@io-arc/utils","@io-arc/webpack-loaders-image","@io-arc/webpack-loaders-js","@io-arc/webpack-loaders-pug-linter","@io-arc/webpack-plugins-task-message","@io-arc/webpack-settings","webpack"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).BuildWebpackVue={},e.env,e.fileList,e.OutputDirDiff,e.PathBuild,e.utils,e.webpackLoadersImage,e.webpackLoadersJs,e.webpackLoadersPugLinter,e.TaskMessage,e.webpackSettings,e.webpack)}(this,(function(e,s,t,a,r,o,i,l,u,n,p,c){"use strict";a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c;const d={loader:"css-loader",options:{url:s.USE_CSS_FILE_LOADER,sourceMap:!1,import:!0,modules:!1}},_=require("autoprefixer"),f=require("css-mqpacker"),b=[_({grid:"autoplace",flexbox:"no-2009"})];s.CSS_POSTCSS_MQ_PACKER&&b.push(f());const w={loader:"postcss-loader",options:{sourceMap:!1,plugins:()=>b}},S=[];s.USE_JS_FILE_LOADER&&S.push(i.ImageLoader(s.OUTPUT_JS_ARRAY,s.OUTPUT_IMG_ARRAY,s.IS_HASH_JS_FILE_LOADER));const g=[];if(g.push(i.ImageMinPlugin),s.MODE_ENV===s.MODE.ONCE){const e=new a([s.DIST,...s.OUTPUT_JS_ARRAY],[]),t=require("webpack-visualizer-plugin");g.push(new t({filename:e.targetRelativePath()+"stats/index.html"}))}const O=require("progress-bar-webpack-plugin"),m=require("prettier-webpack-plugin"),k=require("vue-loader/lib/plugin"),E=require("config-webpack"),L=s.VUE_PUG_LINT_FILE?require(`${process.cwd()}/${s.VUE_PUG_LINT_FILE}`):null,T=new o.WebpackExtends("js"),y=T.externals(),P=T.loaders();null!=P&&S.push(...P);const v=T.plugins();null!=v&&g.push(...v);const A={mode:"none",context:s.WS_JS_PATH_ABSOLUTE,entry:()=>new Promise((e=>{e(t.FileListObject(s.WS_JS_PATH_ABSOLUTE,"js",!0))})),output:{path:s.OUTPUT_JS_PATH_ABSOLUTE,filename:"[name].js",publicPath:r.relative(s.OUTPUT_JS_ARRAY),chunkFilename:"[name].js"},optimization:p.jsOptimization,externals:y,resolve:{extensions:[".js",".jsx",".json",".vue"],alias:{vue$:"vue/dist/vue.esm.js","~":s.WS_ROOT_ABSOLUTE,"@":s.WS_ROOT_ABSOLUTE}},module:{exprContextCritical:!1,rules:[l.workerLoader,{test:/\.vue$/,loader:"vue-loader",options:{transformAssetUrls:s.VUE_LOADER_ASSETS}},{test:/\.js$/,loader:"babel-loader",exclude:e=>/node_modules/.test(e)&&!/\.vue\.js/.test(e)},{test:/\.pug$/,loader:"pug-plain-loader",options:{doctype:"html",pretty:!0}},{test:/\.css$/,use:["vue-style-loader",d,w]},{test:/\.scss$/,use:["vue-style-loader",d,w,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded"}}}]},{test:/\.sass$/,use:["vue-style-loader",d,w,{loader:"sass-loader",options:{sourceMap:!1,sassOptions:{outputStyle:"expanded",indentedSyntax:!0}}}]},{test:/\.styl(us)?$/,use:["vue-style-loader",d,w,{loader:"stylus-loader",options:{sourceMap:!1,"include css":!0,define:null}}]},...S,l.yamlLoader,l.EslintLoader(s.ESLINT),u.PugLintLoader(/\.vue$/,"vue-pug-lint-loader",L)]},plugins:[new n("Vue"),new c.DefinePlugin(p.webpackDefine),new c.ProvidePlugin({Vue:["vue/dist/vue.esm.js","default"]}),new O(p.progressBar("Vue")),new m({extensions:[".js",".jsx",".ts",".tsx",".yaml",".yml",".vue"]}),new k,new E,...g],devtool:!!s.JS_SOURCE_MAP&&"source-map",cache:!0,stats:p.stats(),performance:p.performance()};e.js=A,Object.defineProperty(e,"__esModule",{value:!0})}));
