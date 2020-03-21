# `@io-arc/file-list`

Get file list

## Usage

```typescript
import { FileListObject } from '@io-arc/file-list'

const res = FileListObject('foo', 'js')
```

## Methods

### `FileListObject(dir: string, ext: string, rootOnly = false): {[p:string]: string}`

Get file list object.  
`rootOnly = true` is directory below only.

#### example

```text
directory example

data/
  ├ abc.js
  ├ def.js
  ├ ghi.json
  └ foo/
      ├ jkl.js
      └ mno.json
```

```typescript
import { FileListObject } from '@io-arc/file-list'

const res1 = FileListObject('data', 'js')
console.log(res1)
// -> { abc: 'data/abc.js', def: 'data/def.js', 'foo/jkl': 'data/foo/jkl.js' }

const res2 = FileListObject('data', 'json', true)
console.log(res2)
// -> { ghi: 'data/ghi.json' }
```