/*!
Logger
console logging

https://github.com/io-arc/io-arc/packages/logger
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("kleur"),require("moment"),require("node-notifier")):"function"==typeof define&&define.amd?define(["kleur","moment","node-notifier"],t):(e=e||self).Logger=t(e.Kleur,e.moment,e.nodeNotifier)}(this,(function(e,t,o){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var r=function(e,o){return"========== ["+t().format("HH:mm:ss")+"] "+e+" "+o+" =========="};return function(){function t(){}return t.message=function(t,o){void 0===o&&(o=e.reset),console.log(o(t))},t.start=function(o,n){void 0===n&&(n=!1);var i=n?"\n":"";t.message(i+r(o,"start"),e.blue)},t.complete=function(o,n){void 0===n&&(n=!1);var i=n?"\n":"";t.message(i+r(o,"completed :)"),e.green)},t.failed=function(n,i,s){if(void 0===s&&(s=!0),"string"==typeof i){if(""===i)return void t.message(r(n,"error is empty X("),e.red);t.message(r(n,i),e.red)}else null===i?t.message(r(n,"Oops...")):t.message(r(n,"error X("));if(null!==i&&console.error(i),s){var f=i?"string"==typeof i?i:JSON.stringify(i.message,null,0):"Oops...";(new o.NotificationCenter).notify({message:f,title:n+" error X(",sound:"Glass"})}},t}()}));
