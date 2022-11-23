#!/usr/bin/env node
/*!
@io-arc/task-browser-sync
Run BrowserSync

Version: 1.1.1
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/browser-sync.html

Copyright (c) 2020-2022 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("commander"),t=e(require("fs")),i=require("@io-arc/read-yaml"),s=require("rxjs"),o=require("rxjs/operators"),a=require("@io-arc/env"),n=e(require("browser-sync"));var c,p,h,d,u,l=function(e,r,t){if(!r.has(e))throw new TypeError("attempted to set private field on non-instance");return r.set(e,t),t},v=function(e,r){if(!r.has(e))throw new TypeError("attempted to get private field on non-instance");return r.get(e)};class y{constructor(e,r){c.set(this,void 0),p.set(this,void 0),h.set(this,void 0),d.set(this,(e=>{try{return t.statSync(`${process.cwd()}/config/${e}`),e}catch(e){return}})),u.set(this,(e=>s.of(e).pipe(o.map((e=>(void 0!==e.files||(e.files=`${a.DIST}/**/*`),e))),o.map((e=>void 0!==v(this,c)||void 0!==e.proxy?(void 0!==e.server&&delete e.server,void 0!==v(this,c)&&(e.proxy=v(this,c)),e):(void 0===e.server&&(e.server=`${a.DIST}/`),e))),o.map((e=>{if(void 0!==e.serveStatic)return e;const r=a.SITE_ROOT.replace(/\/$/,"");return""!==r&&(e.serveStatic=[{route:[r],dir:a.DIST}]),e})),o.map((e=>{if(void 0===v(this,p))return e;const r=require("connect-history-api-fallback")({index:v(this,p)});return e.middleware=[r],e.single=!0,e}))))),l(this,c,e),l(this,p,r),l(this,h,v(this,d).call(this,"browser-sync.yml")),void 0===v(this,h)&&(l(this,h,v(this,d).call(this,"bs.yml")),v(this,h))}run(){const e=v(this,h)?i.ReadYaml(v(this,h).replace(".yml",""),["config"]):{};v(this,u).call(this,e).subscribe((e=>{n(e)}))}}c=new WeakMap,p=new WeakMap,h=new WeakMap,d=new WeakMap,u=new WeakMap,(()=>{r.program.version("1.1.1").option("-p, --proxy <ip-address>","Proxy server address").option("--history <filepath>","File paths used by the HTML5 HistoryAPI (e.g. /index.html)").parse(process.argv);const e=r.program.proxy||void 0,t=r.program.history||void 0;new y(e,t).run()})();
