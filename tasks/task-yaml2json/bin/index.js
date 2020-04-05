#!/usr/bin/env node
/*!
Yaml2Json
YAML to JSON conversion

https://github.com/io-arc/io-arc/tasks/task-yaml2json
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("@io-arc/env"),s=e(require("@io-arc/logger")),o=e(require("@io-arc/yaml2json")),t=require("kleur"),i=e(require("node-watch")),c=e(require("path"));const u=new o(r.WS_YAML2JSON_ARRAY,r.DEPLOY_YAML2JSON_ARR),a=e=>s.message(`convert to ${e}`,t.green),n=e=>s.message(`remove for ${e}`,t.red),l=()=>s.complete("yaml2json"),m=e=>s.failed("yaml2json",e),v=()=>{i(r.WS_YAML2JSON_PATH,{recursive:!0,filter:e=>/^(?!_).*\.ya?ml$/.test(c.basename(e))},(e,s)=>{switch(e){case"update":return void u.convert(s,r.JSON_MINIFY).subscribe(a,m);case"remove":return void u.remove(s).subscribe(n,m);default:return}})};r.MODE_ENV===r.MODE.WATCH?u.removeAll().subscribe({error(e){m(e)},complete(){s.message("remove for exist json files"),u.convertAll(r.JSON_MINIFY).subscribe(a,m,v)}}):u.convertAll(r.JSON_MINIFY).subscribe(a,m,l);
