/*!
Clean directory
Clean build directory

https://github.com/io-arc/io-arc/tasks/clean
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(require("commander"),require("@io-arc/env"),require("@io-arc/logger"),require("rimraf")):"function"==typeof define&&define.amd?define(["commander","@io-arc/env","@io-arc/logger","rimraf"],r):r((e=e||self).commander,e.env,e.Logger,e.rimraf)}(this,(function(e,r,o,a){"use strict";o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;(()=>{e.program.version("0.0.0").parse(process.argv);a(`{${r.DIST},stats}/*`,e=>{e?o.failed("clean",e):o.complete("clean")})})()}));
