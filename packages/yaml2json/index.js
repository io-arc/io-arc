/*!
Yaml2Json
YAML to JSON conversion

https://github.com/io-arc/io-arc/packages/yaml2json
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@io-arc/path-build"),require("fs"),require("glob"),require("js-yaml"),require("make-dir"),require("path"),require("rxjs"),require("rxjs/operators")):"function"==typeof define&&define.amd?define(["@io-arc/path-build","fs","glob","js-yaml","make-dir","path","rxjs","rxjs/operators"],t):(e=e||self).Yaml2Json=t(e.PathBuild,e.fs,e.glob,e.yaml,e.mkdir,e.path,e.rxjs,e.operators)}(this,(function(e,t,r,a,i,l,s,n){"use strict";var o,c,p,u,d;e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l;return o=new WeakMap,c=new WeakMap,p=new WeakMap,u=new WeakMap,d=new WeakMap,class{constructor(r,h){o.set(this,void 0),c.set(this,void 0),p.set(this,void 0),u.set(this,void 0),d.set(this,(r,o)=>s.from(r).pipe(n.map(r=>{const i=a.safeLoad(t.readFileSync(r,"utf8")),l=r.replace(__classPrivateFieldGet(this,p),"").replace(__classPrivateFieldGet(this,u),""),s=o?0:2;return{name:e.relative([...__classPrivateFieldGet(this,c),`${l}.json`]),body:JSON.stringify(i||"",null,s)}}),n.flatMap(e=>{return t=this,r=void 0,s=function*(){return yield i(l.dirname(e.name)),e},new((a=void 0)||(a=Promise))((function(e,i){function l(e){try{o(s.next(e))}catch(e){i(e)}}function n(e){try{o(s.throw(e))}catch(e){i(e)}}function o(t){t.done?e(t.value):new a((function(e){e(t.value)})).then(l,n)}o((s=s.apply(t,r||[])).next())}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var t,r,a,s}),n.map(e=>{try{return t.writeFileSync(e.name,e.body),e.name}catch(e){throw new Error(e)}}))),__classPrivateFieldSet(this,p,new RegExp(`${r}/`)),__classPrivateFieldSet(this,u,new RegExp(".ya?ml$")),__classPrivateFieldSet(this,o,e.relative(r)),__classPrivateFieldSet(this,c,h)}convertAll(e){return __classPrivateFieldGet(this,d).call(this,r.sync(`${__classPrivateFieldGet(this,o)}/**/[!_]*.y?(a)ml`),e)}convert(e,t){return __classPrivateFieldGet(this,d).call(this,[e],t)}removeAll(a){const i=e.relative(__classPrivateFieldGet(this,c)),l=a||`${i}/**/*.json`;return s.from(r.sync(l)).pipe(n.map(e=>{try{return t.unlinkSync(e),e}catch(e){throw new Error(e)}}))}remove(r){return s.of(r).pipe(n.map(t=>{const r=t.replace(__classPrivateFieldGet(this,p),"").replace(__classPrivateFieldGet(this,u),"");return e.relative([...__classPrivateFieldGet(this,c),`${r}.json`])}),n.map(e=>{try{return t.unlinkSync(e),e}catch(e){throw new Error(e)}}))}}}));
