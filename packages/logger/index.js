/*!
Logger
console logging

https://github.com/io-arc/io-arc/packages/logger
Version: 0.1.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("kleur"),require("moment"),require("node-notifier")):"function"==typeof define&&define.amd?define(["kleur","moment","node-notifier"],t):(e=e||self).Logger=t(e.Kleur,e.moment,e.nodeNotifier)}(this,(function(e,t,s){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;const o=(e,s)=>`========== [${t().format("HH:mm:ss")}] ${e} ${s} ==========`;class r{static message(t,s=e.reset){console.log(s(t))}static start(t,s=!1){const n=s?"\n":"";r.message(n+o(t,"start"),e.blue)}static complete(t,s=!1){const n=s?"\n":"";r.message(n+o(t,"completed :)"),e.green)}static failed(t,n,i=!0){if("string"==typeof n){if(""===n)return void r.message(o(t,"error is empty X("),e.red);r.message(o(t,n),e.red)}else null===n?r.message(o(t,"Oops...")):r.message(o(t,"error X("));if(null!==n&&console.error(n),!i)return;const l=n?"string"==typeof n?n:JSON.stringify(n.message,null,0):"Oops...";(new s.NotificationCenter).notify({message:l,title:`${t} error X(`,sound:"Glass"})}}return r}));
