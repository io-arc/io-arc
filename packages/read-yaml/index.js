/*!
Read YAML
Transpile YAML to JSON

https://github.com/io-arc/io-arc/tree/master/packages/read-yaml
Version: 0.2.6
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/path-build"),require("fs"),require("js-yaml"),require("path")):"function"==typeof define&&define.amd?define(["exports","@io-arc/path-build","fs","js-yaml","path"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReadYaml={},e.PathBuild,e.fs,e.yaml,e.path)}(this,(function(e,t,a,l,o){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;e.ReadYaml=(e,r)=>{const f=t.relative(r);return l.safeLoad(a.readFileSync(o.join(f,`${e}.yml`),"utf8"))},Object.defineProperty(e,"__esModule",{value:!0})}));
