/*!
@io-arc/webpack5-plugins-dust-remove
output dust files to remove for webpack5

Version: 1.0.2
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/webpack5-plugins-dust-remove

Copyright (c) 2021 arc one
*/
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("@io-arc/env"),require("rimraf")):"function"==typeof define&&define.amd?define(["@io-arc/env","rimraf"],o):(e="undefined"!=typeof globalThis?globalThis:e||self).DustRemove=o(e.env,e.rimraf)}(this,(function(e,o){"use strict";o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;return class{apply(n){n.hooks.done.tap("DustRemovePlugin",(()=>{console.log("done"),o(`${e.DIST}/${e.DUMMY_FILES_DIRECTORY}`,(e=>{e&&console.log(e)}))}))}}}));
