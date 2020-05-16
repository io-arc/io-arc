/*!
File copy
Copying files in a directory

https://github.com/io-arc/io-arc/tasks/copy
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(require("commander"),require("@io-arc/env"),require("@io-arc/logger"),require("cpx"),require("kleur"),require("moment")):"function"==typeof define&&define.amd?define(["commander","@io-arc/env","@io-arc/logger","cpx","kleur","moment"],o):o((e=e||self).commander,e.env,e.Logger,e.cpx,e.kleur,e.moment)}(this,(function(e,o,r,t,a,c){"use strict";r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c;(()=>{e.program.version("0.0.0").parse(process.argv);const n=`${o.WS_STATIC_PATH}/**/!(_*|README.md)`;if(o.MODE_ENV===o.MODE.WATCH){const e="HH:mm:ss";t.watch(n,o.DIST).on("copy",o=>{r.message(`[${c().format(e)}] ${o.dstPath} copied !`,a.green)}).on("remove",o=>{r.message(`[${c().format(e)}] ${o.path} removed !`,a.yellow)}).on("watch-error",e=>r.failed("copy",e))}else t.copy(n,o.DIST,e=>{e?r.failed("copy",e):r.complete("copy")})})()}));
