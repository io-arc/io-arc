/*!
@io-arc/yaml2json
YAML to JSON conversion

Version: 1.0.2
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/yaml2json.html

Copyright (c) 2020-2021 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@io-arc/path-build"),require("fs"),require("glob"),require("js-yaml"),require("make-dir"),require("path"),require("rxjs"),require("rxjs/operators")):"function"==typeof define&&define.amd?define(["@io-arc/path-build","fs","glob","js-yaml","make-dir","path","rxjs","rxjs/operators"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Yaml2Json=t(e.PathBuild,e.fs,e.glob,e.yaml,e.mkdir,e.path,e.rxjs,e.operators)}(this,(function(e,t,r,a,n,o,i,s){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;var l,p,c,u,h,d=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r},f=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};return l=new WeakMap,p=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,class{constructor(r,y){l.set(this,void 0),p.set(this,void 0),c.set(this,void 0),u.set(this,void 0),h.set(this,((r,l)=>i.from(r).pipe(s.map((r=>{const n=a.safeLoad(t.readFileSync(r,"utf8")),o=r.replace(f(this,c),"").replace(f(this,u),""),i=l?0:2;return{name:e.relative([...f(this,p),`${o}.json`]),body:JSON.stringify(n||"",null,i)}})),s.flatMap((async e=>(await n(o.dirname(e.name)),e))),s.map((e=>{try{return t.writeFileSync(e.name,e.body),e.name}catch(e){throw new Error(e)}}))))),d(this,l,e.relative(r)),d(this,p,y),d(this,c,new RegExp(`${f(this,l)}/`)),d(this,u,new RegExp(".ya?ml$"))}convertAll(e){return f(this,h).call(this,r.sync(`${f(this,l)}/**/[!_]*.y?(a)ml`),e)}convert(e,t){return f(this,h).call(this,[e],t)}removeAll(a){const n=e.relative(f(this,p)),o=a||`${n}/**/*.json`;return i.from(r.sync(o)).pipe(s.map((e=>{try{return t.unlinkSync(e),e}catch(e){throw new Error(e)}})))}remove(r){return i.of(r).pipe(s.map((t=>{const r=t.replace(f(this,c),"").replace(f(this,u),"");return e.relative([...f(this,p),`${r}.json`])})),s.map((e=>{try{return t.unlinkSync(e),e}catch(e){throw new Error(e)}})))}}}));
