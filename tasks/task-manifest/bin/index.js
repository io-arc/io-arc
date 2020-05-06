#!/usr/bin/env node
/*!
Create a manifest.json

https://github.com/io-arc/io-arc/tasks/task-manifest
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("glob")),a=require("@io-arc/env"),s=require("rxjs"),n=require("rxjs/operators"),t=e(require("path")),i=e(require("js-yaml")),o=e(require("fs")),m=e(require("@io-arc/path-build")),c=e(require("make-dir")),u=e(require("@io-arc/logger")),l=require("kleur"),p=e(require("@io-arc/yaml2json")),f=e(require("node-watch"));const b=e=>{const r=new RegExp(".ya?ml$");return s.from(e).pipe(n.map(e=>{const s=t.basename(e).replace(r,".json"),n=i.safeLoad(o.readFileSync(e,"utf8"))||{};return{name:m.relative([a.DIST,s]),base:n}}),n.map(e=>{const{name:r,base:s}=e;return"name"in s&&""!==s.name||(s.name=a.SITE_TITLE),"short_name"in s&&""!==s.short_name||(s.short_name=a.SITE_TITLE),"scope"in s&&""!==s.scope||(s.scope=a.SITE_ROOT),"related_applications"in s&&"object"==typeof s.related_applications||(s.related_applications=[]),{name:r,body:JSON.stringify(s,null,2)}}),n.flatMap(async e=>(await c(t.dirname(e.name)),e)),n.map(e=>{try{return o.writeFileSync(e.name,e.body),e.name}catch(e){throw new Error(e)}}))},d=e=>u.message(`convert to ${e}`,l.green),y=e=>u.failed("manifest",e),T=r.sync(`${a.WS_ROOT}/manifest*.y?(a)ml`);if(a.MODE_ENV===a.MODE.WATCH){const e=new p([a.WS_ROOT],[a.DIST]);e.removeAll(`${a.DIST}/manifest*.json`).subscribe({error(e){y(e)},complete(){u.message("remove for exist manifest*.json files"),b(T).subscribe(d,y,()=>{f(a.WS_ROOT,{recursive:!0,filter:e=>/^(?!_)manifest.*\.ya?ml$/.test(t.basename(e))},(r,a)=>{switch(r){case"update":return void b([a]).subscribe(d,y);case"remove":return void e.remove(a).subscribe(e=>u.message(`remove for ${e}`,l.red));default:return}})})}})}else T.length>0&&b(T).subscribe(d,y,()=>u.complete("manifest"));
