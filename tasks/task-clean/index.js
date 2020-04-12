/*!
Clean directory
Clean build directory

https://github.com/io-arc/io-arc/tasks/clean
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(require("@io-arc/env"),require("@io-arc/logger"),require("rimraf")):"function"==typeof define&&define.amd?define(["@io-arc/env","@io-arc/logger","rimraf"],r):r((e=e||self).env,e.Logger,e.rimraf)}(this,(function(e,r,t){"use strict";r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;t(`{${e.DIST},stats}/*`,e=>{e?r.failed("clean",e):r.complete("clean")})}));
