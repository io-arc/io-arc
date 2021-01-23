# `@io-arc/output-dir-diff`

A relative path to another directory from one directory.

See the [documents](https://io-arc.tech/plugins/module-output-dir-diff.html).

## Install

```shell
$ npm i @io-arc/output-dir-diff
```

## Usage

```typescript
import OutputDirDiff from '@io-arc/output-dir-diff'

const diff = new OutputDirDiff(['foo', 'bar'], ['foo'])
const res = diff.targetRelativePath()
console.log(res)
// -> '../'
```
