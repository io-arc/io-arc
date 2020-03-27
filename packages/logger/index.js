/*!
Logger
Original logging

https://github.com/io-arc/io-arc/packages/logger
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("kleur"),require("moment"),require("node-notifier")):"function"==typeof define&&define.amd?define(["kleur","moment","node-notifier"],t):(e=e||self).Env=t(e.Kleur,e.moment,e.nodeNotifier)}(this,(function(e,t,o){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var n=function(e,o){return"========== ["+t().format("HH:mm:ss")+"] "+e+" "+o+" =========="};return function(){function t(){}return t.message=function(t,o){void 0===o&&(o=e.reset),console.log(o(t))},t.start=function(o,r){void 0===r&&(r=!1);var i=r?"\n":"";t.message(i+n(o,"start"),e.blue)},t.complete=function(o,r){void 0===r&&(r=!1);var i=r?"\n":"";t.message(i+n(o,"completed :)"),e.green)},t.failed=function(r,i,s){if(void 0===s&&(s=!0),"string"==typeof i?t.message(n(r,i),e.red):null===i?t.message(n(r,"Oops...")):t.message(n(r,"error X(")),null!==i&&console.error(i),s){var f=i?"string"==typeof i?i:JSON.stringify(i.message,null,0):"Oops...";(new o.NotificationCenter).notify({message:f,title:r+" error X(",sound:"Glass"})}},t}()}));
