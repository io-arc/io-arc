#!/usr/bin/env node
/*!
Yaml2Json
YAML to JSON conversion

https://github.com/io-arc/io-arc/tasks/task-yaml2json
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("@io-arc/env"),n=e(require("@io-arc/logger")),o=e(require("@io-arc/path-build")),t=e(require("@io-arc/target-directory")),i=e(require("@io-arc/yaml2json")),s=e(require("config")),u=require("kleur"),a=e(require("node-watch")),c=e(require("path"));var l=t.wsArray("wsDir.yaml2json","yaml2json"),f=s.has("deployDir.json")?s.get("deployDir.json"):["common","json"],m=new i(l,
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
function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;var o=Array(e),t=0;for(r=0;r<n;r++)for(var i=arguments[r],s=0,u=i.length;s<u;s++,t++)o[t]=i[s];return o}([r.DIST],f)),v=!!s.has("options.json.minify")&&s.get("options.json.minify"),y=function(e){return n.message("convert to "+e,u.green)},b=function(e){return n.message("remove for "+e,u.red)},d=function(e){return n.failed("yaml2json",e)},g=function(){a(o.relative(l),{recursive:!0,filter:function(e){return/^(?!_).*\.ya?ml$/.test(c.basename(e))}},(function(e,r){switch(e){case"update":return void m.convert(r,v).subscribe(y,d);case"remove":return void m.remove(r).subscribe(b,d);default:return}}))};r.MODE_ENV===r.MODE.WATCH?m.removeAll().subscribe({error:function(e){d(e)},complete:function(){n.message("remove for exist json files"),m.convertAll(v).subscribe(y,d,g)}}):m.convertAll(v).subscribe(y,d,(function(){return n.complete("yaml2json")}));
