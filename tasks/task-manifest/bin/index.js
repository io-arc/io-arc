#!/usr/bin/env node
/*!
@io-arc/task-manifest
Create a manifest.json

Version: 1.1.1
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/manifest.html

Copyright (c) 2020-2022 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("commander"),a=e(require("glob")),s=require("@io-arc/env"),n=require("rxjs"),i=require("rxjs/operators"),t=e(require("path")),o=e(require("js-yaml")),m=e(require("fs")),c=e(require("@io-arc/path-build")),u=e(require("make-dir")),l=e(require("@io-arc/logger")),p=require("kleur"),f=e(require("@io-arc/yaml2json")),b=e(require("node-watch"));(()=>{r.program.version("1.1.1").parse(process.argv);const e=e=>{const r=new RegExp(".ya?ml$");return n.from(e).pipe(i.map((e=>{const a=t.basename(e).replace(r,".json"),n=o.safeLoad(m.readFileSync(e,"utf8"))||{};return{name:c.relative([s.DIST,a]),base:n}})),i.map((e=>{const{name:r,base:a}=e;return"name"in a&&""!==a.name||(a.name=s.SITE_TITLE),"short_name"in a&&""!==a.short_name||(a.short_name=s.SITE_TITLE),"scope"in a&&""!==a.scope||(a.scope=s.SITE_ROOT),"related_applications"in a&&"object"==typeof a.related_applications||(a.related_applications=[]),{name:r,body:JSON.stringify(a,null,2)}})),i.flatMap((async e=>(await u(t.dirname(e.name)),e))),i.map((e=>{try{return m.writeFileSync(e.name,e.body),e.name}catch(e){throw new Error(e)}})))},d=e=>l.message(`convert to ${e}`,p.green),y=e=>l.failed("manifest",e),T=a.sync(`${s.WS_ROOT}/manifest*.y?(a)ml`);if(s.MODE_ENV===s.MODE.WATCH){const r=new f([s.WS_ROOT],[s.DIST]);r.removeAll(`${s.DIST}/manifest*.json`).subscribe({error(e){y(e)},complete(){l.message("remove for exist manifest*.json files"),e(T).subscribe(d,y,(()=>{b(s.WS_ROOT,{recursive:!0,filter:e=>/^(?!_)manifest.*\.ya?ml$/.test(t.basename(e))},((a,s)=>{switch(a){case"update":return void e([s]).subscribe(d,y);case"remove":return void r.remove(s).subscribe((e=>l.message(`remove for ${e}`,p.red)));default:return}}))}))}})}else T.length>0&&e(T).subscribe(d,y,(()=>l.complete("manifest")))})();
