/*!
Yaml2Json
YAML to JSON conversion

https://github.com/io-arc/io-arc/tasks/task-yaml2json
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(require("commander"),require("@io-arc/env"),require("@io-arc/logger"),require("@io-arc/yaml2json"),require("kleur"),require("node-watch"),require("path")):"function"==typeof define&&define.amd?define(["commander","@io-arc/env","@io-arc/logger","@io-arc/yaml2json","kleur","node-watch","path"],r):r((e=e||self).commander,e.env,e.Logger,e.Yaml2Json,e.kleur,e.watch,e.path)}(this,(function(e,r,o,t,a,s,c){"use strict";o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c;(()=>{e.program.version("0.0.0").parse(process.argv);const l=new t(r.WS_YAML2JSON_ARRAY,r.DEPLOY_YAML2JSON_ARRAY),n=e=>o.message(`convert to ${e}`,a.green),i=e=>o.message(`remove for ${e}`,a.red),u=()=>o.complete("yaml2json"),d=e=>o.failed("yaml2json",e),m=()=>{s(r.WS_YAML2JSON_PATH,{recursive:!0,filter:e=>/^(?!_).*\.ya?ml$/.test(c.basename(e))},(e,o)=>{switch(e){case"update":return void l.convert(o,r.JSON_MINIFY).subscribe(n,d);case"remove":return void l.remove(o).subscribe(i,d);default:return}})};r.MODE_ENV===r.MODE.WATCH?l.removeAll().subscribe({error(e){d(e)},complete(){o.message("remove for exist json files"),l.convertAll(r.JSON_MINIFY).subscribe(n,d,m)}}):l.convertAll(r.JSON_MINIFY).subscribe(n,d,u)})()}));
