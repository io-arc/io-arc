#!/usr/bin/env node
/*!
@io-arc/task-service-worker
Create a Service Worker

Version: 1.0.2
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/service-worker.html

Copyright (c) 2020-2021 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("commander"),r=e(require("fs")),i=require("@io-arc/env"),n=require("rxjs"),s=require("rxjs/operators"),a=require("kleur"),o=e(require("@io-arc/logger")),c=e(require("cpx")),u=e(require("path"));var l,p,m,f,h,d=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},w=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r};class g{constructor(){l.set(this,void 0),p.set(this,`${i.WS_ROOT_ABSOLUTE}/sw.js`),m.set(this,(e=>{const{generateSW:t}=require("workbox-build");t(e).then((e=>{o.complete("service-worker"),o.message(`pre cache ${e.count} files, total ${d(this,h).call(this,e.size)}`)})).catch((e=>{o.failed("service-worker",e)}))})),f.set(this,(e=>{const t=1024,r=t**2,i=t**3,n=t**4;return e>=n?{denominator:n,unit:"TB"}:e>=i?{denominator:i,unit:"GB"}:e>=r?{denominator:r,unit:"MB"}:e>=t?{denominator:t,unit:"KB"}:{denominator:-1,unit:"byte"}})),h.set(this,(e=>{const{denominator:t,unit:r}=d(this,f).call(this,e);return(t>-1?Math.floor(e/t*100)/100:e)+r}));try{r.statSync(d(this,p)),w(this,l,!0)}catch(e){w(this,l,!1)}}exist(){return d(this,l)}run(){const e=require(d(this,p));n.of(e).pipe(s.map((e=>{if(null!=e.filename&&""!==e.filename||(e.filename="sw.js"),!/\.js$/.test(e.filename))throw new Error("Target filename wasn't JavaScrip file");return e})),s.map((e=>(e.manifest.globDirectory=i.DIST,e.manifest.swDest=`${i.DIST}/${e.filename}`,e.manifest)))).subscribe((e=>{d(this,m).call(this,e)}),(e=>{o.message(e,a.red),process.exit(1)}))}}l=new WeakMap,p=new WeakMap,m=new WeakMap,f=new WeakMap,h=new WeakMap,(()=>{if(t.program.version("1.0.2").option("-t, --template","generate template").parse(process.argv),t.program.template)return c.copySync(`${u.dirname(__filename)}/template/sw.js`,i.WS_ROOT),o.message("done !",a.blue),void process.exit(0);const e=new g;e.exist()&&e.run()})();
