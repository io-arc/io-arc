/*!
@io-arc/webp-converter
Convert an image to webp

Version: 1.0.0
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/webp-converter.html

Copyright (c) 2021 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@io-arc/path-build"),require("fs"),require("glob"),require("imagemin"),require("imagemin-webp"),require("make-dir"),require("path"),require("rxjs"),require("rxjs/internal/operators"),require("rxjs/operators")):"function"==typeof define&&define.amd?define(["@io-arc/path-build","fs","glob","imagemin","imagemin-webp","make-dir","path","rxjs","rxjs/internal/operators","rxjs/operators"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).WebpConverter=t(e.PathBuild,e.fs,e.glob,e.imagemin,e.imageminWebp,e.mkdir,e.path,e.rxjs,e.operators,e.operators$1)}(this,(function(e,t,r,i,a,n,s,o,p,l){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s;var h,u,c,f,d,w,m,g,y,b,v=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r},j=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};const k=require("imagemin-gif2webp");return h=new WeakMap,u=new WeakMap,c=new WeakMap,f=new WeakMap,d=new WeakMap,w=new WeakMap,m=new WeakMap,g=new WeakMap,y=new WeakMap,b=new WeakMap,class{constructor(t,r={png:!0,jpg:!0,gif:!1},x,O,M){h.set(this,void 0),u.set(this,void 0),c.set(this,void 0),f.set(this,void 0),d.set(this,void 0),w.set(this,void 0),m.set(this,void 0),g.set(this,void 0),y.set(this,e=>o.from(e).pipe(l.map(e=>({filename:e,convert:e.replace(j(this,c),j(this,u)).replace(j(this,d),".webp")})),p.flatMap(async e=>(await n(s.dirname(e.convert)),e)),p.flatMap(async e=>{try{return await i([e.filename],{destination:s.dirname(e.convert),plugins:[a(j(this,m)),k(j(this,g))]}),e.convert}catch(e){throw new Error(e)}}))),b.set(this,(e,t,r)=>{const i=[];return e&&i.push("png"),t&&i.push("jpg","jpeg"),r&&i.push("gif"),i}),v(this,h,e.relative(t)),v(this,u,null!=M?e.relative(M):j(this,h)),v(this,c,new RegExp(`^${j(this,h)}`)),v(this,w,j(this,b).call(this,r.png,r.jpg,r.gif));const W=j(this,w).join("|");v(this,f,`+(${W})`),v(this,d,new RegExp(`\\.(${W})$`)),v(this,m,x),v(this,g,O)}notTarget(){return 0===j(this,w).length}targetDirectory(){return j(this,h)}regExp4FileExtensions(){return new RegExp(`^(?!_).*\\.(${j(this,w).join("|")})$`)}convertAll(){return j(this,y).call(this,r.sync(`${j(this,h)}/**/[!_]*.${j(this,f)}`))}convert(e){return j(this,y).call(this,[e])}removeAll(){return o.from(r.sync(`${j(this,u)}/**/*.webp`)).pipe(l.map(e=>{try{return t.unlinkSync(e),e}catch(e){throw new Error(e)}}))}remove(r){return o.of(r).pipe(l.map(t=>{const r=t.replace(j(this,c),"").replace(j(this,d),"");return e.relative([j(this,u),`${r}.webp`])}),l.map(e=>{try{return t.unlinkSync(e),e}catch(e){throw new Error(e)}}))}}}));
