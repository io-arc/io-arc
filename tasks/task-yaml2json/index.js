/*!
Yaml2Json
YAML to JSON conversion

https://github.com/io-arc/io-arc/tasks/task-yaml2json
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(require("@io-arc/env"),require("@io-arc/logger"),require("@io-arc/yaml2json"),require("kleur"),require("node-watch"),require("path")):"function"==typeof define&&define.amd?define(["@io-arc/env","@io-arc/logger","@io-arc/yaml2json","kleur","node-watch","path"],r):r((e=e||self).env,e.Logger,e.Yaml2Json,e.kleur,e.watch,e.path)}(this,(function(e,r,t,o,a,l){"use strict";r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l;const s=new t(e.WS_YAML2JSON_ARRAY,e.DEPLOY_YAML2JSON_ARRAY),c=e=>r.message(`convert to ${e}`,o.green),n=e=>r.message(`remove for ${e}`,o.red),i=()=>r.complete("yaml2json"),u=e=>r.failed("yaml2json",e),f=()=>{a(e.WS_YAML2JSON_PATH,{recursive:!0,filter:e=>/^(?!_).*\.ya?ml$/.test(l.basename(e))},(r,t)=>{switch(r){case"update":return void s.convert(t,e.JSON_MINIFY).subscribe(c,u);case"remove":return void s.remove(t).subscribe(n,u);default:return}})};e.MODE_ENV===e.MODE.WATCH?s.removeAll().subscribe({error(e){u(e)},complete(){r.message("remove for exist json files"),s.convertAll(e.JSON_MINIFY).subscribe(c,u,f)}}):s.convertAll(e.JSON_MINIFY).subscribe(c,u,i)}));
