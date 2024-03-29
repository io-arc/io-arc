#!/usr/bin/env node
/*!
@io-arc/task-webp-converter
Convert an image to webp task

Version: 1.1.1
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/webp-converter.html

Copyright (c) 2021-2022 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("@io-arc/env"),t=e(require("@io-arc/logger")),o=e(require("@io-arc/webp-converter")),s=require("commander"),i=require("kleur"),c=e(require("node-watch")),n=e(require("path"));(()=>{if(s.program.version("1.1.1").parse(process.argv),0===r.WEBP_CONVERTER_CONFIG.length)return;const e=e=>{t.message(`convert to ${e}`,i.green)},u=e=>{t.message(`remove for ${e}`,i.red)},a=e=>t.complete(`webpConvert (${e})`),l=e=>t.failed("webpConvert",e),v=r=>{c(r.targetDirectory(),{recursive:!0,filter:e=>r.regExp4FileExtensions().test(n.basename(e))},((t,o)=>{if(null!=o)switch(t){case"update":return void r.convert(o).subscribe(e,l);case"remove":return void r.remove(o).subscribe(u,l);default:return}}))};r.WEBP_CONVERTER_CONFIG.forEach((s=>{const i=new o(s.target,s.ext,s.options,s.gifOptions,s.output);i.notTarget()||(((e=!0)=>e)(s.deleteBefore)?i.removeAll().subscribe({error(e){l(e)},complete(){t.message("remove for exist webp files"),r.MODE_ENV===r.MODE.WATCH?i.convertAll().subscribe(e,l,(()=>v(i))):i.convertAll().subscribe(e,l,(()=>a(i.targetDirectory())))}}):r.MODE_ENV===r.MODE.WATCH?i.convertAll().subscribe(e,l,(()=>v(i))):i.convertAll().subscribe(e,l,(()=>a(i.targetDirectory()))))}))})();
