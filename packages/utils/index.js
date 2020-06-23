/*!
Utility functions

https://github.com/io-arc/io-arc/tree/master/packages/utils
Version: 0.2.1
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/env"),require("@io-arc/path-build")):"function"==typeof define&&define.amd?define(["exports","@io-arc/env","@io-arc/path-build"],t):t((e=e||self).Utils={},e.env,e.PathBuild)}(this,(function(e,t,i){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;e.AssetsDirPath=e=>t.SITE_ROOT+e.join("/"),e.siteRootRelative=e=>0===e.length?t.SITE_ROOT:`${t.SITE_ROOT+i.relative(e)}/`,Object.defineProperty(e,"__esModule",{value:!0})}));
