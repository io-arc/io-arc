#!/usr/bin/env node
/*!
Create a Service Worker

https://github.com/io-arc/io-arc/tasks/task-service-worker
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("commander"),r=e(require("fs")),i=require("@io-arc/env"),n=require("rxjs"),s=require("rxjs/operators"),a=require("kleur"),o=e(require("@io-arc/logger"));var c,u,l,p,m,f=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},h=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r};c=new WeakMap,u=new WeakMap,l=new WeakMap,p=new WeakMap,m=new WeakMap,t.program.version("0.0.0").option("-t, --template","generate template").parse(process.argv),t.program.template&&process.exit(1),(new class{constructor(){c.set(this,void 0),u.set(this,`${i.WS_ROOT_ABSOLUTE}/sw.js`),l.set(this,e=>{const{generateSW:t}=require("workbox-build");t(e).then(e=>{o.complete("service-worker"),o.message(`pre cache ${e.count} files, total ${f(this,m).call(this,e.size)}`)}).catch(e=>{o.failed("service-worker",e)})}),p.set(this,e=>{const t=1024,r=t**3,i=t**4;return e>=i?{denominator:i,unit:"TB"}:e>=r?{denominator:r,unit:"GB"}:e>=1048576?{denominator:1048576,unit:"MB"}:e>=t?{denominator:t,unit:"KB"}:{denominator:-1,unit:"byte"}}),m.set(this,e=>{const{denominator:t,unit:r}=f(this,p).call(this,e);return(t>-1?Math.floor(e/t*100)/100:e)+r});try{r.statSync(f(this,u)),h(this,c,!0)}catch(e){h(this,c,!1)}}exist(){return f(this,c)}run(){const e=require(f(this,u));n.of(e).pipe(s.map(e=>{if(null!=e.filename&&""!==e.filename||(e.filename="sw.js"),!/\.js$/.test(e.filename))throw new Error("Target filename wasn't JavaScrip file");return e}),s.map(e=>(e.manifest.globDirectory=i.DIST,e.manifest.swDest=`${i.DIST}/${e.filename}`,e.manifest))).subscribe(e=>{f(this,l).call(this,e)},e=>{o.message(e,a.red),process.exit(1)})}}).run();
