/*!
Read YAML
Transpile YAML to JSON

https://github.com/io-arc/io-arc/packages/read-yaml
Version: 0.0.1
License: ISC
Copyright (c) 2020 arc one
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@io-arc/path-build"),require("fs"),require("js-yaml"),require("path")):"function"==typeof define&&define.amd?define(["exports","@io-arc/path-build","fs","js-yaml","path"],t):t((e=e||self).ReadYaml={},e.PathBuild,e.fs,e.yaml,e.path)}(this,(function(e,t,a,r,l){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l;e.ReadYaml=(e,o)=>{const f=t.relative(o);return r.safeLoad(a.readFileSync(l.join(f,`${e}.yml`),"utf8"))},Object.defineProperty(e,"__esModule",{value:!0})}));
