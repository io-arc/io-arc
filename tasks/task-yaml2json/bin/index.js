#!/usr/bin/env node
/*!
@io-arc/task-yaml2json
YAML to JSON conversion

Version: 1.1.1
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/yaml2json.html

Copyright (c) 2020-2022 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("commander"),s=require("@io-arc/env"),o=e(require("@io-arc/logger")),t=e(require("@io-arc/yaml2json")),i=require("kleur"),a=e(require("node-watch")),c=e(require("path"));(()=>{r.program.version("1.1.1").parse(process.argv);const e=new t(s.WS_YAML2JSON_ARRAY,s.DEPLOY_YAML2JSON_ARRAY),u=e=>o.message(`convert to ${e}`,i.green),n=e=>o.message(`remove for ${e}`,i.red),l=()=>o.complete("yaml2json"),m=e=>o.failed("yaml2json",e),v=()=>{a(s.WS_YAML2JSON_PATH,{recursive:!0,filter:e=>/^(?!_).*\.ya?ml$/.test(c.basename(e))},((r,o)=>{switch(r){case"update":return void e.convert(o,s.JSON_MINIFY).subscribe(u,m);case"remove":return void e.remove(o).subscribe(n,m);default:return}}))};s.MODE_ENV===s.MODE.WATCH?e.removeAll().subscribe({error(e){m(e)},complete(){o.message("remove for exist json files"),e.convertAll(s.JSON_MINIFY).subscribe(u,m,v)}}):e.convertAll(s.JSON_MINIFY).subscribe(u,m,l)})();
