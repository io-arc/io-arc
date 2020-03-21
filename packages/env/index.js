/*!
Environment
Build environment define

https://github.com/io-arc/io-arc/packages/env
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("config")):"function"==typeof define&&define.amd?define(["exports","config"],t):t((e=e||self).Env={},e.config)}(this,(function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var o={DEVELOPMENT:"development",PRODUCTION:"production",TEST:"test",NONE:"none"},n=t.has("siteRoot")?t.get("siteRoot"):"/",i=t.has("outputDir")?t.get("outputDir"):"dist",r=t.has("overrideEnv")?t.get("overrideEnv"):process.env.NODE_ENV||o.DEVELOPMENT;e.BUILD_ENV=o,e.DIST=i,e.MODE={ONCE:"once",WATCH:"watch"},e.NODE_ENV=r,e.SITE_ROOT=n,e.WS_ROOT="src",Object.defineProperty(e,"__esModule",{value:!0})}));
