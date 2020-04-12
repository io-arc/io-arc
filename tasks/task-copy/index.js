/*!
File copy
Copying files in a directory

https://github.com/io-arc/io-arc/tasks/copy
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(require("@io-arc/env"),require("@io-arc/logger"),require("cpx"),require("kleur"),require("moment")):"function"==typeof define&&define.amd?define(["@io-arc/env","@io-arc/logger","cpx","kleur","moment"],o):o((e=e||self).env,e.Logger,e.cpx,e.kleur,e.moment)}(this,(function(e,o,t,r,c){"use strict";o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c;const a=`${e.WS_STATIC_PATH}/**/!(_*|README.md)`;if(e.MODE_ENV===e.MODE.WATCH){const n="HH:mm:ss";t.watch(a,e.DIST).on("copy",e=>{o.message(`[${c().format(n)}] ${e.dstPath} copied !`,r.green)}).on("remove",e=>{o.message(`[${c().format(n)}] ${e.path} removed !`,r.yellow)}).on("watch-error",e=>o.failed("copy",e))}else t.copy(a,e.DIST,e=>{e?o.failed("copy",e):o.complete("copy")})}));
