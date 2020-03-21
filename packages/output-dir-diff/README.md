# `@io-arc/output-dir-diff`

Relative path to another directory from one directory

## Usage

```typescript
import OutputDirDiff from '@io-arc/output-dir-diff'

const diff = new OutputDirDiff(['foo', 'bar'], ['foo'])
const res = diff.targetRelativePath()
console.log(res)
// -> '../'
```

## Methods

### `new OutputDirDiff(base: string[], target: string[])`

Class instance.  
Specify an array for the base directory and an array for the target directory.

### `targetRelativePath()`

Obtain the difference between base and target with relative path.

```typescript
import OutputDirDiff from '@io-arc/output-dir-diff'

const diff = new OutputDirDiff(['foo', 'bar'], ['foo'])
const res = diff.targetRelativePath()
console.log(res)
// -> '../'
```