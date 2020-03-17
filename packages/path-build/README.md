# `@io-arc/path-build`

Path create to relative or absolute.

## Usage

```typescript
import PathBuild from '@io-arc/path-build'

const dist = PathBuild.relative(['abc', 'def'])
// -> 'abc/def'

const ab = PathBuild.absolute(['abc', 'def'])
// -> '/Users/xxxx/xxxx/abc/def'
```

## Methods

No `new` instance.  
This class is static function.

### `PathBuild.relative(arr: string[]): string`

Create path join.

#### example

```typescript
import PathBuild from '@io-arc/path-build'

const result = PathBuild.relative(['abc', 'def'])
// -> 'abc/def'
```

### `PathBuild.absolute(arr: string[]): string`

Create absolute path from root.  

#### example

```typescript
import PathBuild from '@io-arc/path-build'

const result = PathBuild.absolute(['abc', 'def'])
// -> '/Users/foo/bar/abc/def'
```

### `PathBuild.rootRelative(arr: string[]): string`

Create relative path from site root.  
`siteRoot` property + string[] = '/xxx/xxx/'    
`siteRoot` is defined using [config](https://www.npmjs.com/package/node-config)  
(`siteRoot` default to `/`)

#### example

```typescript
import PathBuild from '@io-arc/path-build'
// siteRoot is '/'

const result1 = PathBuild.rootRelative([])
// -> '/'

const result2 = PathBuild.rootRelative(['abc', 'def'])
// -> '/abc/def/'
```
