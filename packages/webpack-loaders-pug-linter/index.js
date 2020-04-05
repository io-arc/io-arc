/*!
Pug Lint
Pug linter for webpack loader

https://github.com/io-arc/io-arc/packages/webpack-loaders-pug-linter
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e=e||self).PugLinter={})}(this,(function(e){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var r=function(){return(r=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},t={validateIndentation:2,requireClassLiteralsBeforeAttributes:!0,requireIdLiteralsBeforeAttributes:!0,requireLowerCaseAttributes:!0,requireLowerCaseTags:!0,requireSpaceAfterCodeOperator:!0,requireSpecificAttributes:[{img:["alt"]}],requireStrictEqualityOperators:!0};e.PugLintLoader=function(e,i,o){return{test:e,exclude:/node_modules/,loader:i,options:r({emitError:!0},o||t),enforce:"pre"}},Object.defineProperty(e,"__esModule",{value:!0})}));
