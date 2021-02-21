# `@io-arc/path-build`

Path create to relative or absolute.

See the [documents](https://io-arc.tech/plugins/modules/path-build.html).

## Install

```shell
$ npm i @io-arc/path-build
```

## Usage

```typescript
import PathBuild from '@io-arc/path-build'

const dist = PathBuild.relative(['abc', 'def'])
// -> 'abc/def'

const ab = PathBuild.absolute(['abc', 'def'])
// -> '/Users/xxxx/xxxx/abc/def'
```
