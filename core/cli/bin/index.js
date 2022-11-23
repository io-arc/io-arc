#!/usr/bin/env node
/*!
io-arc
WEB/PWA/SPA boilerplate CLI

Version: 1.1.0
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/

Copyright (c) 2020-2022 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("commander"),s=require("kleur"),n=e(require("update-notifier")),r=e(require("fs")),i=e(require("make-dir")),a=e(require("path")),o=e(require("cpx")),c=e(require("inquirer")),p=e(require("get-latest-version")),l=require("child_process");const u={"@io-arc/types":"^1.0.0","@types/cpx":"^1.5.1","@types/inquirer":"^6.5.0","@types/update-notifier":"^4.1.0","cross-env":"^7.0.2","npm-run-all":"^4.1.5",webpack:"^4.43.0","webpack-cli":"^4.7.2"};var h,d,m={name:"@io-arc/cli",version:"1.1.0",description:"WEB/PWA/SPA boilerplate CLI",keywords:["web","pwa","spa","boilerplate","cli","html","css","javascript","pug","sass","scss","stylus","babel","typescript","manifest","serviceworker"],author:"arc one",homepage:"https://io-arc.tech/",license:"ISC",main:"",directories:{bin:"bin",lib:"lib",test:"tests"},files:["bin"],publishConfig:{access:"public"},repository:{type:"git",url:"https://github.com/io-arc/io-arc.git"},scripts:{prebuild:"eslint lib/*.ts",build:"rollup -c",io:"io-arc"},bin:{"io-arc":"bin/index.js"},dependencies:{commander:"^5.1.0",cpx:"^1.5.0","get-latest-version":"^4.0.0",inquirer:"8.1.2",json2yaml:"^1.1.0",kleur:"^3.0.3","make-dir":"^3.1.0",rxjs:"^6.5.5","update-notifier":"^4.1.0"},devDependencies:u},g=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class w{constructor(){h.set(this,[10,17,0]),d.set(this,[0,0,0]);const e=process.versions.node.split(".");for(let t=0;t<0;t++)g(this,d)[t]=parseFloat(e[t])||0}check(){return g(this,h).every(((e,t)=>e>=g(this,d)[t]))}fail(){console.log(s.red("Please Node.js version update.")),console.log(s.blue(`Require: >= ${g(this,h).join(".")}\nYour version: ${process.versions.node}`)),console.log(s.green("Bye !")),process.exit(1)}}h=new WeakMap,d=new WeakMap;const f=(e,t)=>{console.log(s.red(`Oops X(\nFile create failed for ${e}`)),t&&console.error(t)},y=e=>{/{(.*)}/.test(e)?(e=>{const t=e.indexOf("{"),n=e.indexOf("}"),r=e.substr(0,t),i=e.substr(n+1);e.substr(t+1,n-2).split(",").forEach((e=>{console.log(s.white("File create completed for ")+s.green(r+e+i))}))})(e):/\*\*$/.test(e)?(e=>{const t=e.replace("/**","");console.log(s.white("File create completed for ")+s.green(t))})(e):console.log(s.white("File create completed for ")+s.green(e))},b=require("json2yaml");class v{async create(e,t){const s=`config/${e}.yml`,n=b.stringify(t).replace(/^---(\n|\r|\n\r)/g,"").replace(/^\s{2}/gm,"");await i(a.dirname(s));try{r.writeFileSync(s,n),y(s)}catch(e){f(s,e)}}}var k,j=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s},E=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class M extends v{constructor(e,t,s,n,r){super(),k.set(this,void 0),j(this,k,{title:e,url:t,author:s,description:n,siteRoot:r})}async create(){await super.create("default",E(this,k)),await super.create("development",{type:"development"}),await super.create("production",{type:"production"})}}k=new WeakMap;var $,D,S=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s},x=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};const W=`${a.dirname(__filename)}/template`;class T{constructor(){$.set(this,void 0),D.set(this,(async e=>{const t=this.workingSpace();await Promise.all(e.map((async e=>{await i(`${t}/${e}`)})))})),S(this,$,[{source:`${W}/.{editorconfig,gitignore,npmrc,browserslistrc}`,output:""},{source:`${W}/webpack.extends.js`,output:"config",logValue:"webpack.extends.js"}])}workingSpace(){return"src"}add(e){if(0===e.length)return;const t=[];S(this,$,[...x(this,$),...e].filter((e=>{if(0===t.length)return t.push(e),e;return!!t.every((t=>t.source!==e.source||t.output!=t.output))&&(t.push(e),e)})))}async create(e){await x(this,D).call(this,e),x(this,$).forEach((e=>{o.copySync(e.source,e.output);const t=e.logValue||e.source.split("/").pop(),s=/(.+)/.test(e.output)?/\/$/.test(e.output)?e.output+t:`${e.output}/${t}`:t;y(s)}))}}$=new WeakMap,D=new WeakMap;class q{startLog(e){console.log(s.bold().green(`# ${e}`))}fail(){console.log(s.red("Oops X(")),process.exit(1)}}const L="^1.5.1";var P,O,I,R,N,B,V=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s},A=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};const C="html",F="pug",_="html",J="php";class G extends q{constructor(){super(...arguments),P.set(this,C),O.set(this,_),I.set(this,!1),R.set(this,(async e=>{if("html"===e)return;const t=await c.prompt({type:"list",name:"ext",message:"Build file extension",choices:[{name:".html",value:_},{name:".php",value:J}]}).catch((e=>(console.error(e),1)));"number"!=typeof t?V(this,O,t.ext):this.fail()})),N.set(this,(e=>[{source:`${W}/html/README.md`,output:`src/${e}`},{source:`${W}/html/index.html`,output:`src/${e}`}])),B.set(this,(e=>{const t=[{source:`${W}/pug/README.md`,output:`src/${e}`},{source:`${W}/.pug-lintrc.json`,output:""}];return A(this,I)?t.push({source:`${W}/pug/assets/**`,output:`src/${e}/assets`,logValue:"assets"},{source:`${W}/pug/index.pug`,output:`src/${e}`}):t.push({source:`${W}/pug/no-template/index.pug`,output:`src/${e}`}),t}))}engine(){return A(this,P)}ext(){return A(this,O)}isPug(){return A(this,P)===F}async questions(){this.startLog("Select HTML template engine");const e=await c.prompt({type:"list",name:"engine",message:"Template engine",choices:[{name:"None (Vanilla HTML)",value:C},{name:"Pug",value:F}]}).catch((e=>(console.error(e),1)));"number"!=typeof e?(V(this,P,e.engine),await A(this,R).call(this,e.engine)):this.fail()}taskLibrary(){switch(A(this,P)){case C:return"@io-arc/task-webpack-html";case F:return"@io-arc/task-webpack-pug";default:return null}}dependencies(){return A(this,P)!==F?null:{"@prettier/plugin-pug":L}}async createTemplateQuestion(){const e=(()=>{switch(A(this,P)){case C:return"HTML";case F:return"Pug";default:return""}})();if(A(this,P)!==F)return;const t=await c.prompt({type:"confirm",name:"template",message:`${e} template create?`,default:!1}).catch((e=>(console.error(e),1)));"number"!=typeof t?V(this,I,t.template):this.fail()}template(e){switch(A(this,P)){case C:return A(this,N).call(this,e);case F:return A(this,B).call(this,e);default:return[]}}}P=new WeakMap,O=new WeakMap,I=new WeakMap,R=new WeakMap,N=new WeakMap,B=new WeakMap;const H={node:">= 16.13.0",npm:">= 5.8.0",yarn:">= 1.7.0"},U="7.6.0",Q="6.10.0",X="^2.0.5",z="8.8.2",Y="3.8.3",K={"@babel/core":"^7.9.6","@babel/plugin-proposal-class-properties":"^7.8.3","@babel/plugin-proposal-private-methods":"^7.8.3","@babel/plugin-syntax-dynamic-import":"^7.8.3","@babel/plugin-transform-template-literals":"^7.8.3","@babel/preset-env":"^7.9.6","babel-eslint":"^10.1.0",eslint:"^7.6.0","eslint-config-prettier":"^6.11.0","eslint-config-standard":"^14.1.1","eslint-plugin-babel":"^5.3.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.1",prettier:"^2.0.5",webpack:"^4.43.0","webpack-cli":"^4.7.2"},Z={"@types/config":"^0.0.36","@types/node":"^13.13.4","@typescript-eslint/eslint-plugin":"^2.30.0","@typescript-eslint/parser":"^2.30.0",eslint:"^7.6.0","eslint-config-prettier":"^6.11.0","eslint-loader":"^4.0.2","eslint-plugin-prettier":"^3.1.3",prettier:"^2.0.5","ts-node":"^8.9.1",webpack:"^4.43.0","webpack-cli":"^4.7.2"},ee={"@types/config":"^0.0.36","@types/node":"^13.13.4","@typescript-eslint/eslint-plugin":"^2.30.0","@typescript-eslint/parser":"^2.30.0",eslint:"^7.6.0","eslint-config-prettier":"^6.11.0","eslint-loader":"^4.0.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2",prettier:"^2.0.5",pug:"^3.0.0",stylus:"^0.54.7",vue:"^2.6.11",webpack:"^4.43.0","webpack-cli":"^4.7.2"},te={"@babel/core":"^7.9.6","@babel/plugin-proposal-class-properties":"^7.8.3","@babel/plugin-proposal-private-methods":"^7.8.3","@babel/plugin-syntax-dynamic-import":"^7.8.3","@babel/plugin-transform-template-literals":"^7.8.3","@babel/preset-env":"^7.9.6",eslint:"^7.6.0","eslint-config-prettier":"^6.11.0","eslint-config-standard":"^14.1.1","eslint-plugin-babel":"^5.3.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.1","eslint-plugin-vue":"^6.2.2","node-sass":"^8.0.0",prettier:"^2.0.5",pug:"^3.0.0",stylus:"^0.54.7",vue:"^2.6.11",webpack:"^4.43.0","webpack-cli":"^4.7.2"};var se,ne,re,ie,ae=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},oe=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s};const ce="typescript",pe="babel",le="none",ue="vue";class he extends q{constructor(){super(...arguments),se.set(this,ce),ne.set(this,le),re.set(this,(e=>{const t=[],s=ae(this,ne)===ue?"vue":"babel";return t.push({source:`${W}/lint/js/${s}/.eslintrc.yml`,output:""},{source:`${W}/.babelrc`,output:""},{source:`${W}/js/README.md`,output:`src/${e}`}),ae(this,ne)===ue&&t.push({source:`${W}/config-vue/.pug-lintrc.json`,output:"config-vue"}),t})),ie.set(this,(e=>{const t=[],s=ae(this,ne)===ue?"vue-ts":"ts";return t.push({source:`${W}/lint/js/${s}/.eslintrc.yml`,output:""},{source:`${W}/tsconfig.json`,output:""},{source:`${W}/ts/README.md`,output:`src/${e}`}),ae(this,ne)===ue&&t.push({source:`${W}/config-vue/.pug-lintrc.json`,output:"config-vue"}),t}))}preprocessor(){return ae(this,se)}framework(){return ae(this,ne)}async questions(){this.startLog("Select JavaScript preprocessor");const e=await c.prompt([{type:"list",name:"preprocessor",message:"JavaScript preprocessor",choices:[{name:"TypeScript",value:ce},{name:"Babel",value:pe}]},{type:"list",name:"framework",message:"Use framework",choices:[{name:"None",value:le},{name:"Vue.js",value:ue}]}]).catch((e=>(console.error(e),1)));"number"!=typeof e?(oe(this,se,e.preprocessor),oe(this,ne,e.framework)):this.fail()}taskLibrary(){if(ae(this,ne)===ue)switch(ae(this,se)){case ce:return"@io-arc/task-webpack-vue-typescript";case pe:return"@io-arc/task-webpack-vue";default:return null}else switch(ae(this,se)){case ce:return"@io-arc/task-webpack-typescript";case pe:return"@io-arc/task-webpack-babel";default:return null}}async dependencies(){let e={};if(ae(this,ne)===ue)switch(ae(this,se)){case ce:e={...e,...ee};break;case pe:e={...e,...te}}switch(ae(this,se)){case ce:const t=await p("typescript");e={...e,...Z,typescript:t??Y,"ts-node":z};break;case pe:e={...e,...K}}return e}template(e){switch(ae(this,se)){case ce:return ae(this,ie).call(this,e);case pe:return ae(this,re).call(this,e);default:return[]}}}se=new WeakMap,ne=new WeakMap,re=new WeakMap,ie=new WeakMap;var de,me=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s},ge=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class we extends v{constructor(e){super(),de.set(this,void 0),me(this,de,{outputDir:"dist",wsDir:{static:"static",html:"html",css:"css",js:"js",img:"img",yaml2json:"yaml2json"},deployDir:e,options:{css:{postcss:{mqpacker:!0,autoprefixer:{grid:"autoplace"}}},js:{splitFilename:"asset",eslint:".eslintrc.yml"},fileLoader:{html:{use:!0,hash:!0,target:[{tag:"img",attribute:"src",type:"src"},{tag:"img",attribute:"srcset",type:"srcset"},{tag:"img",attribute:"data-src",type:"src"},{tag:"img",attribute:"data-srcset",type:"srcset"},{tag:"source",attribute:"src",type:"src"}]},css:{use:!0,hash:!0},js:{use:!0,hash:!0}},imagemin:[["gifsicle",{interlaced:!0,optimizationLevel:1,colors:256}],["jpegtran",{progressive:!0}],["optipng",{optimizationLevel:5}],["svgo",{plugins:[{removeViewBox:!0}]}]]}})}workingDirectories(){const e=[];return Object.keys(ge(this,de).wsDir).forEach((t=>{e.push(ge(this,de).wsDir[t])})),e}pugToPHP(e,t,s){e===F&&(ge(this,de).options.pug={php:t===J,lint:".pug-lintrc.json"}),s===ue&&(void 0===ge(this,de).options.pug&&(ge(this,de).options.pug={}),ge(this,de).options.pug.vuePugLint="config-vue/.pug-lintrc.json")}tsconfig(e){e===ce&&(ge(this,de).options.js.tsconfig="tsconfig.json")}jsFramework(e){e!==ue||(ge(this,de).options.fileLoader.vue={use:!0,loader:{video:["src","poster"],source:"src",img:"src"}})}webp(e){ge(this,de).options.webp=e}wsHTML(){return ge(this,de).wsDir.html}wsCSS(){return ge(this,de).wsDir.css}wsJS(){return ge(this,de).wsDir.js}wsImg(){return ge(this,de).wsDir.img}wsStatic(){return ge(this,de).wsDir.static}async create(){await super.create("local",ge(this,de)),await super.create("local-development",{options:{html:{minify:!1},css:{minify:!1},js:{minify:!1,sourceMap:!0},json:{minify:!1}}}),await super.create("local-production",{options:{html:{minify:!0},css:{minify:!0},js:{minify:!0,terser:{parallel:!0,extractComments:!1,terserOptions:{compress:{drop_console:!0}}},sourceMap:!1},json:{minify:!0}}})}template(){return[{source:`${W}/img/README.md`,output:`src/${ge(this,de).wsDir.img}`},{source:`${W}/static/README.md`,output:`src/${ge(this,de).wsDir.static}`},{source:`${W}/yaml2json/README.md`,output:`src/${ge(this,de).wsDir.yaml2json}`}]}}de=new WeakMap;var fe,ye=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s},be=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class ve{constructor(){fe.set(this,void 0),ye(this,fe,"declare module '*.yml' {\n  const value: any\n  export default value\n}\n\ndeclare module '*.png'\ndeclare module '*.jpg'\ndeclare module '*.jpeg'\ndeclare module '*.gif'\ndeclare module '*.svg'\ndeclare module '*.webp'\n\n/* webpack define */\ndeclare const IS_PRODUCTION: boolean\ndeclare const SITE_TITLE: string\ndeclare const SITE_URL: string\ndeclare const SITE_AUTHOR: string\ndeclare const SITE_ROOT: string")}addVue(){ye(this,fe,be(this,fe)+"\n\n/* Vue.js */\ndeclare module '*.vue' {\n  import Vue from 'vue'\n  export default Vue\n}")}async create(){await i("types");const e="types/custom.d.ts";ye(this,fe,be(this,fe)+"\n");try{r.writeFileSync(e,be(this,fe)),y(e)}catch(t){f(e,t)}}}fe=new WeakMap;var ke,je,Ee=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},Me=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s};const $e="npm",De="yarn";class Se extends q{constructor(){super(...arguments),ke.set(this,!0),je.set(this,$e)}isInstall(){return Ee(this,ke)}async questions(){this.startLog("Package Install");const e=await c.prompt({type:"confirm",name:"install",message:"Library install?",default:!0}).catch((e=>(console.error(e),{install:!1})));Me(this,ke,e.install)}async packageManager(){const e=await c.prompt({type:"list",name:"manager",message:"Package manager",choices:[{name:"npm",value:$e},{name:"yarn",value:De}]}).catch((e=>(console.error(e),{manager:$e})));Me(this,je,e.manager)}start(e){console.log(s.bold().blue("Install start..."));const t=l.spawn(Ee(this,je),["install"],{cwd:a.resolve(),stdio:"inherit"});console.log(""),t.on("close",(t=>{0===t?e&&e():console.error("Install error X(")}))}}ke=new WeakMap,je=new WeakMap;var xe,We,Te,qe=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class Le{constructor(e,t,s,n){xe.set(this,{name:"",version:"",description:"",main:"",author:"",license:"ISC",engines:H,scripts:{},devDependencies:{},dependencies:{}}),We.set(this,(e=>{const t={};return Object.keys(e).sort().forEach((s=>{t[s]=e[s]})),t})),Te.set(this,(()=>{const e=["vue"],t=Object.keys(qe(this,xe).devDependencies),s={};for(const n of t)e.includes(n)&&(s[n]=qe(this,xe).devDependencies[n],delete qe(this,xe).devDependencies[n]);this.addDependenciesObject(s)})),qe(this,xe).name=e,qe(this,xe).version=t,qe(this,xe).description=s,qe(this,xe).author=n,qe(this,xe).devDependencies={"@io-arc/task-browser-sync":"^1.1.0","@io-arc/task-clean":"^1.1.0","@io-arc/task-copy":"^1.1.0","@io-arc/task-manifest":"^1.1.0","@io-arc/task-service-worker":"^1.1.0","@io-arc/task-yaml2json":"^1.1.0","@io-arc/task-webp-converter":"^1.1.0","cross-env":u["cross-env"],"npm-run-all":u["npm-run-all"],eslint:U,"eslint-config-prettier":Q,prettier:X,webpack:u.webpack,"webpack-cli":u["webpack-cli"]},qe(this,xe).scripts={start:"cross-env NODE_ENV=development MODE_ENV=watch npm-run-all -p webp b:*",build:"cross-env NODE_ENV=development MODE_ENV=once npm-run-all -s clean webp b:* service-worker",release:"cross-env NODE_ENV=production MODE_ENV=once npm-run-all -s clean webp b:* service-worker",clean:"ia-clean",server:"ia-browser-sync","service-worker":"ia-sw",webp:"ia-webp","b:copy":"ia-copy","b:yaml2json":"ia-yaml2json","b:manifest":"ia-manifest","b:webpack":"webpack"}}addDevDependencies(e){null!=e&&(qe(this,xe).devDependencies[e]="^1.1.0")}addDevDependenciesObject(e){null!=e&&(qe(this,xe).devDependencies={...qe(this,xe).devDependencies,...e})}addDependenciesObject(e){null!=e&&(qe(this,xe).dependencies={...qe(this,xe).dependencies,...e})}create(){qe(this,Te).call(this),qe(this,xe).devDependencies=qe(this,We).call(this,qe(this,xe).devDependencies),qe(this,xe).dependencies=qe(this,We).call(this,qe(this,xe).dependencies);try{r.writeFileSync("package.json",JSON.stringify(qe(this,xe),null,2)),y("package.json")}catch(e){f("package.json",e),process.exit(1)}}}xe=new WeakMap,We=new WeakMap,Te=new WeakMap;var Pe,Oe=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s},Ie=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class Re{constructor(e){Pe.set(this,void 0),Oe(this,Pe,"trailingComma: none\ntabWidth: 2\nsemi: false\nsingleQuote: true\narrowParens: always"),e&&Oe(this,Pe,Ie(this,Pe)+"\noverrides:")}addPug(e){e&&Oe(this,Pe,Ie(this,Pe)+"\n  - files: '*.pug'\n    options:\n      parser: pug\n      bracketSpacing: false\n      semi: true\n      singleQuote: false")}create(){const e=".prettierrc";try{r.writeFileSync(e,Ie(this,Pe)),y(e)}catch(t){f(e,t)}}}Pe=new WeakMap;const Ne={webpack:"^4.42.1","webpack-cli":"^4.7.2"},Be={stylus:"^0.54.7",webpack:"^4.42.1","webpack-cli":"^4.7.2"};var Ve,Ae,Ce,Fe,_e=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},Je=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s};const Ge="css",He="sass",Ue="stylus";class Qe extends q{constructor(){super(...arguments),Ve.set(this,Ge),Ae.set(this,(e=>[{source:`${W}/css/README.md`,output:`src/${e}`},{source:`${W}/css/style.css`,output:`src/${e}`}])),Ce.set(this,(e=>[{source:`${W}/sass/README.md`,output:`src/${e}`},{source:`${W}/sass/style.scss`,output:`src/${e}`}])),Fe.set(this,(e=>[{source:`${W}/stylus/README.md`,output:`src/${e}`},{source:`${W}/stylus/style.styl`,output:`src/${e}`}]))}lang(){return _e(this,Ve)}async questions(){this.startLog("Select CSS Language");const e=await c.prompt([{type:"list",name:"lang",message:"CSS language",choices:[{name:"CSS (Vanilla)",value:Ge},{name:"Sass (SASS/SCSS)",value:He},{name:"Stylus",value:Ue}]}]).catch((e=>(console.error(e),1)));"number"!=typeof e?Je(this,Ve,e.lang):this.fail()}taskLibrary(){switch(_e(this,Ve)){case Ge:return"@io-arc/task-webpack-css";case He:return"@io-arc/task-webpack-sass";case Ue:return"@io-arc/task-webpack-stylus";default:return null}}dependencies(){switch(_e(this,Ve)){case He:return Ne;case Ue:return Be;default:return null}}template(e){switch(_e(this,Ve)){case Ge:return _e(this,Ae).call(this,e);case He:return _e(this,Ce).call(this,e);case Ue:return _e(this,Fe).call(this,e);default:return[]}}}Ve=new WeakMap,Ae=new WeakMap,Ce=new WeakMap,Fe=new WeakMap;var Xe,ze,Ye,Ke,Ze=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},et=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s};class tt extends q{constructor(){super(...arguments),Xe.set(this,["common","css"]),ze.set(this,["common","js"]),Ye.set(this,["common","img"]),Ke.set(this,["common","data"])}async questions(){this.startLog("Deploy settings");const e=await c.prompt([{type:"input",name:"css",message:"CSS files output directory",default:Ze(this,Xe).join("/")},{type:"input",name:"js",message:"JavaScript files output directory",default:Ze(this,ze).join("/")},{type:"input",name:"img",message:"Image files output directory",default:Ze(this,Ye).join("/")},{type:"input",name:"json",message:"YAML to JSON convert files output directory",suffix:`\n ${s.grey("* use @io-arc/task-yaml2json")}`,default:Ze(this,Ke).join("/")}]).catch((e=>(console.error(e),1)));"number"!=typeof e?(et(this,Xe,e.css.split("/").filter(Boolean)),et(this,ze,e.js.split("/").filter(Boolean)),et(this,Ye,e.img.split("/").filter(Boolean)),et(this,Ke,e.json.split("/").filter(Boolean))):this.fail()}dir(){return{css:Ze(this,Xe),js:Ze(this,ze),img:Ze(this,Ye),json:Ze(this,Ke)}}}Xe=new WeakMap,ze=new WeakMap,Ye=new WeakMap,Ke=new WeakMap;var st,nt,rt,it,at=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},ot=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s};class ct extends q{constructor(){super(...arguments),st.set(this,a.basename(process.cwd())),nt.set(this,"1.0.0"),rt.set(this,""),it.set(this,"")}name(){return at(this,st)}version(){return at(this,nt)}description(){return at(this,rt)}author(){return at(this,it)}async questions(){this.startLog("Project settings");const e=await c.prompt([{type:"input",name:"name",message:"Project Name",default:at(this,st)},{type:"input",name:"version",message:"Project Version",default:at(this,nt)},{type:"input",name:"description",message:"Project Description"},{type:"input",name:"author",message:"Project Author"}]).catch((e=>(console.error(e),1)));"number"!=typeof e?(ot(this,st,e.name),ot(this,nt,e.version),ot(this,rt,e.description),ot(this,it,e.author)):this.fail()}}st=new WeakMap,nt=new WeakMap,rt=new WeakMap,it=new WeakMap;var pt,lt,ut,ht,dt,mt=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s},gt=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class wt extends q{constructor(e){super(),pt.set(this,""),lt.set(this,""),ut.set(this,""),ht.set(this,""),dt.set(this,"/"),mt(this,ut,e)}title(){return gt(this,pt)}url(){return gt(this,lt)}siteRoot(){return gt(this,dt)}author(){return gt(this,ut)}description(){return gt(this,ht)}async questions(){this.startLog("Site settings");const e=await c.prompt([{type:"input",name:"title",message:"Site title"},{type:"input",name:"url",message:"Release Site URL",suffix:`\n${s.grey("No final slash required\ne.g. https://foo.com")}`,validate:e=>!/\/$/.test(e)},{type:"input",name:"author",message:"Site author",default:gt(this,ut)},{type:"input",name:"description",message:"Site description"},{type:"input",name:"siteRoot",message:"Site root directory",suffix:`\n${s.grey("Always add a slash at the end")}`,default:gt(this,dt)}]).catch((e=>(console.error(e),1)));"number"!=typeof e?(mt(this,pt,e.title),mt(this,lt,e.url),mt(this,dt,e.siteRoot),mt(this,ut,e.author),mt(this,ht,e.description)):this.fail()}}pt=new WeakMap,lt=new WeakMap,ut=new WeakMap,ht=new WeakMap,dt=new WeakMap;var ft,yt,bt,vt,kt,jt=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s},Et=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class Mt extends q{constructor(e,t){super(),ft.set(this,[{target:["src","img"],ext:{png:!1,jpg:!1,gif:!1},output:["src","img"],options:{quality:75},gifOptions:{quality:75},deleteBefore:!0},{target:["src","static"],ext:{png:!1,jpg:!1,gif:!1},output:["src","static"],options:{quality:75},gifOptions:{quality:75},deleteBefore:!0}]),yt.set(this,""),bt.set(this,""),vt.set(this,(async(e,{ext:t,deleteBefore:n})=>{const{png:r,jpg:i,gif:a}=t,o=await c.prompt([{type:"checkbox",name:"ext",message:`Select a target webp convert file extensions with '${s.bold().green(e)}'`,choices:[{name:"PNG",checked:r,value:"png"},{name:"JPG(JPEG)",checked:i,value:"jpg"},{name:"GIF",checked:a,value:"gif"}]},{type:"confirm",name:"deleteBefore",message:"Whether to delete the webp file when the task starts (Not delete when in watch task)",default:n}]).catch((e=>(console.error(e),1)));return"number"==typeof o?o:{ext:{png:o.ext.includes("png"),jpg:o.ext.includes("jpg"),gif:o.ext.includes("gif")},deleteBefore:o.deleteBefore}})),kt.set(this,((e,{ext:t,deleteBefore:s})=>{Et(this,ft)[e].ext=t,Et(this,ft)[e].deleteBefore=s})),jt(this,yt,e.join("/")),jt(this,bt,t.join("/")),Et(this,ft)[0].target=e,Et(this,ft)[1].target=t}async questions(){this.startLog("Using Webp converter");const e=await c.prompt({type:"confirm",name:"using",message:"Do you want to use the Webp Converter?",suffix:`\n${s.grey("PNG, JPEG, GIF to Webp file convert")}`,default:!1}).catch((e=>(console.error(e),1)));if("number"==typeof e)return void this.fail();if(!e.using)return;const t=[Et(this,yt),Et(this,bt)];let n={ext:{png:!0,jpg:!0,gif:!1},deleteBefore:!0};for(let e=0,s=t.length;e<s;e++){const s=await Et(this,vt).call(this,t[e],n);if("number"==typeof s)return void this.fail();Et(this,kt).call(this,e,s),n=s}}options(){return Et(this,ft)}}ft=new WeakMap,yt=new WeakMap,bt=new WeakMap,vt=new WeakMap,kt=new WeakMap;var $t,Dt=function(e,t,s){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,s),s},St=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class xt{constructor(e,t,s){$t.set(this,void 0);const n=[];null!==e&&n.push(`const { html } = require('${e}')`),null!==t&&n.push(`const { css } = require('${t}')`),null!==s&&n.push(`const { js } = require('${s}')`),Dt(this,$t,`${n.join("\n")}\n\nmodule.exports = [html, css, js]\n`)}create(){try{r.writeFileSync("webpack.config.js",St(this,$t)),y("webpack.config.js")}catch(e){f("webpack.config.js",e)}}}$t=new WeakMap,n({pkg:m}).notify(),process.stdin.resume(),process.on("SIGINT",(()=>{console.log(s.green("Bye !")),process.exit(0)})),t.program.version("1.1.0").parse(process.argv),(async()=>{const e=new w;if(!e.check())return void e.fail();const t=new T,n=new ct;await n.questions();const r=new Le(n.name(),n.version(),n.description(),n.author());console.log("");const i=new wt(n.author());await i.questions(),console.log("");const a=new G;await a.questions(),r.addDevDependencies(a.taskLibrary()),r.addDevDependenciesObject(a.dependencies()),console.log("");const o=new Qe;await o.questions(),r.addDevDependencies(o.taskLibrary()),r.addDevDependenciesObject(o.dependencies()),console.log("");const c=new he;await c.questions(),r.addDevDependencies(c.taskLibrary());const p=await c.dependencies();r.addDevDependenciesObject(p),console.log("");const l=new tt;await l.questions();const u=new we(l.dir());u.pugToPHP(a.engine(),a.ext(),c.framework()),u.jsFramework(c.framework()),u.tsconfig(c.preprocessor());const h=new M(i.title(),i.url(),i.author(),i.description(),i.siteRoot());console.log("");const d=new Mt(["src",u.wsImg()],["src",u.wsStatic()]);if(await d.questions(),u.webp(d.options()),console.log(""),await a.createTemplateQuestion(),t.add(a.template(u.wsHTML())),t.add(o.template(u.wsCSS())),t.add(c.template(u.wsJS())),t.add(u.template()),await t.create(u.workingDirectories()),await u.create(),await h.create(),r.create(),c.preprocessor()===ce){const e=new ve;c.framework()===ue&&e.addVue(),await e.create()}const m=new Re(a.isPug());m.addPug(a.isPug()),m.create();new xt(a.taskLibrary(),o.taskLibrary(),c.taskLibrary()).create(),console.log("");const g=s.bold().blue("Done!\nEnjoy create!!"),f=new Se;await f.questions(),f.isInstall()?(await f.packageManager(),f.start((()=>console.log(g)))):console.log(g)})();
