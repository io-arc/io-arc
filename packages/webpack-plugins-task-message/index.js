/*!
@io-arc/webpack-plugins-task-message
Task complete message for webpack

Version: 1.0.0
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/webpack-plugins-task-message.html

Copyright (c) 2020-2021 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@io-arc/logger")):"function"==typeof define&&define.amd?define(["@io-arc/logger"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).TaskMessage=t(e.Logger)}(this,(function(e){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var t,o=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,o),o},n=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};return t=new WeakMap,class{constructor(e){t.set(this,void 0),o(this,t,e)}apply(o){o.hooks.done.tap("TaskMessage",o=>{0===o.compilation.errors.length?e.complete(n(this,t),!0):(console.log(""),e.failed(n(this,t),null))})}}}));
