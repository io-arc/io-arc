/*!
Create a Service Worker

https://github.com/io-arc/io-arc/tasks/task-service-worker
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("commander"),require("fs"),require("@io-arc/env"),require("rxjs"),require("rxjs/operators"),require("kleur"),require("@io-arc/logger"),require("cpx"),require("path")):"function"==typeof define&&define.amd?define(["commander","fs","@io-arc/env","rxjs","rxjs/operators","kleur","@io-arc/logger","cpx","path"],t):t((e=e||self).commander,e.fs,e.env,e.rxjs,e.operators,e.kleur,e.Logger,e.cpx,e.path)}(this,(function(e,t,r,i,n,o,a,s,c){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c;var l,p,u,f,m,d=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},h=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r};class w{constructor(){l.set(this,void 0),p.set(this,`${r.WS_ROOT_ABSOLUTE}/sw.js`),u.set(this,e=>{const{generateSW:t}=require("workbox-build");t(e).then(e=>{a.complete("service-worker"),a.message(`pre cache ${e.count} files, total ${d(this,m).call(this,e.size)}`)}).catch(e=>{a.failed("service-worker",e)})}),f.set(this,e=>{const t=1024,r=t**3,i=t**4;return e>=i?{denominator:i,unit:"TB"}:e>=r?{denominator:r,unit:"GB"}:e>=1048576?{denominator:1048576,unit:"MB"}:e>=t?{denominator:t,unit:"KB"}:{denominator:-1,unit:"byte"}}),m.set(this,e=>{const{denominator:t,unit:r}=d(this,f).call(this,e);return(t>-1?Math.floor(e/t*100)/100:e)+r});try{t.statSync(d(this,p)),h(this,l,!0)}catch(e){h(this,l,!1)}}exist(){return d(this,l)}run(){const e=require(d(this,p));i.of(e).pipe(n.map(e=>{if(null!=e.filename&&""!==e.filename||(e.filename="sw.js"),!/\.js$/.test(e.filename))throw new Error("Target filename wasn't JavaScrip file");return e}),n.map(e=>(e.manifest.globDirectory=r.DIST,e.manifest.swDest=`${r.DIST}/${e.filename}`,e.manifest))).subscribe(e=>{d(this,u).call(this,e)},e=>{a.message(e,o.red),process.exit(1)})}}l=new WeakMap,p=new WeakMap,u=new WeakMap,f=new WeakMap,m=new WeakMap,(()=>{if(e.program.version("0.0.0").option("-t, --template","generate template").parse(process.argv),e.program.template)return void function(){if(null==process.mainModule)return a.message("Missing main module",o.red),void process.exit(1);s.copy(`${c.dirname(process.mainModule.filename)}/template/sw.js`,r.WS_ROOT,e=>{if(e)return a.failed("create a service-worker",e),void process.exit(1);a.message("done !",o.blue),process.exit(0)})}();(new w).run()})()}));
