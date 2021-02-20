/*!
@io-arc/logger
console logging

Version: 0.4.0
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/logger.html

Copyright (c) 2020-2021 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("kleur"),require("moment"),require("node-notifier")):"function"==typeof define&&define.amd?define(["kleur","moment","node-notifier"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Logger=t(e.Kleur,e.moment,e.nodeNotifier)}(this,(function(e,t,o){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;const s=(e,o)=>`========== [${t().format("HH:mm:ss")}] ${e} ${o} ==========`;class r{static message(t,o=e.reset){console.log(o(t))}static start(t,o=!1){const n=o?"\n":"";r.message(n+s(t,"start"),e.blue)}static complete(t,o=!1){const n=o?"\n":"";r.message(n+s(t,"completed :)"),e.green)}static failed(t,n,i=!0){if("string"==typeof n){if(""===n)return void r.message(s(t,"error is empty X("),e.red);r.message(s(t,n),e.red)}else null===n?r.message(s(t,"Oops...")):r.message(s(t,"error X("));if(null!==n&&console.error(n),!i)return;const l=n?"string"==typeof n?n:JSON.stringify(n.message,null,0):"Oops...";(new o.NotificationCenter).notify({message:l,title:`${t} error X(`,sound:!0,wait:!0})}}return r}));
