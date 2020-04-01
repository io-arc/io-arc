#!/usr/bin/env node
/*!
Yaml2Json
YAML to JSON conversion

https://github.com/io-arc/io-arc/tasks/task-yaml2json
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("@io-arc/env"),n=e(require("@io-arc/logger")),t=e(require("@io-arc/path-build")),o=e(require("@io-arc/target-directory")),i=e(require("@io-arc/yaml2json")),u=e(require("config")),s=require("kleur"),c=e(require("node-watch")),a=e(require("path"));var l=o.wsArray("wsDir.yaml2json","yaml2json"),f=u.get("deployDir.json"),v=new i(l,
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
function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;var t=Array(e),o=0;for(r=0;r<n;r++)for(var i=arguments[r],u=0,s=i.length;u<s;u++,o++)t[o]=i[u];return t}([r.DIST],f)),m=u.get("options.json.minify"),b=function(e){return n.message("convert to "+e,s.green)},g=function(e){return n.message("remove for "+e,s.red)},d=function(e){return n.failed("yaml2json",e)},y=function(){c(t.relative(l),{recursive:!0,filter:function(e){return/^(?!_).*\.ya?ml$/.test(a.basename(e))}},(function(e,r){switch(e){case"update":return void v.convert(r,m).subscribe(b,d);case"remove":return void v.remove(r).subscribe(g,d);default:return}}))};r.MODE_ENV===r.MODE.WATCH?v.removeAll().subscribe({error:function(e){d(e)},complete:function(){n.message("remove for exist json files"),v.convertAll(m).subscribe(b,d,y)}}):v.convertAll(m).subscribe(b,d,(function(){return n.complete("yaml2json")}));
