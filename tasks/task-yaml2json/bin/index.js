#!/usr/bin/env node
/*!
Yaml2Json
YAML to JSON conversion

https://github.com/io-arc/io-arc/tasks/task-yaml2json
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("@io-arc/env"),n=e(require("@io-arc/logger")),t=e(require("@io-arc/yaml2json")),o=require("kleur"),u=e(require("node-watch")),i=e(require("path")),c=new t(r.WS_YAML2JSON_ARRAY,r.DEPLOY_YAML2JSON_ARR),s=function(e){return n.message("convert to "+e,o.green)},a=function(e){return n.message("remove for "+e,o.red)},l=function(e){return n.failed("yaml2json",e)},f=function(){u(r.WS_YAML2JSON_PATH,{recursive:!0,filter:function(e){return/^(?!_).*\.ya?ml$/.test(i.basename(e))}},(function(e,n){switch(e){case"update":return void c.convert(n,r.JSON_MINIFY).subscribe(s,l);case"remove":return void c.remove(n).subscribe(a,l);default:return}}))};r.MODE_ENV===r.MODE.WATCH?c.removeAll().subscribe({error:function(e){l(e)},complete:function(){n.message("remove for exist json files"),c.convertAll(r.JSON_MINIFY).subscribe(s,l,f)}}):c.convertAll(r.JSON_MINIFY).subscribe(s,l,(function(){return n.complete("yaml2json")}));
