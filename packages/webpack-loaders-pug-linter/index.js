/*!
@io-arc/webpack-loaders-pug-linter
Pug linter for webpack loader

Version: 1.0.3
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/modules/webpack-loaders-pug-linter.html

Copyright (c) 2020-2021 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).PugLinter={})}(this,(function(e){"use strict";const t={validateIndentation:2,requireClassLiteralsBeforeAttributes:!0,requireIdLiteralsBeforeAttributes:!0,requireLowerCaseAttributes:!0,requireLowerCaseTags:!0,requireSpaceAfterCodeOperator:!0,requireSpecificAttributes:[{img:["alt"]}],requireStrictEqualityOperators:!0};e.PugLintLoader=(e,r,i)=>({test:e,exclude:/node_modules/,loader:r,options:{emitError:!0,...i||t},enforce:"pre"}),Object.defineProperty(e,"__esModule",{value:!0})}));
