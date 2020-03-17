# `@io-arc/path-build`

Path create to relative or absolute.

## Usage

```
import PathBuild from '@io-arc/path-build'

const dist = PathBuild.relative(['abc', 'def])
// -> 'abc/def'

const ab = PathBuild.absolute(['abc', 'def'])
// -> '/Users/xxxx/xxxx/abc/def'
```

## Functions

No `new` instance.  
This class is static function.

### `PathBuild.relative(arr: string[]): string`

Create path join.

parameter | type | description
--- | --- | ---
arr | string[] | String of path to join

#### Return
`string`    
ex. 'abc/def'

### `PathBuild.absolute(arr: string[]): string`

Create absolute path from root.

parameter | type | description
--- | --- | ---
arr | string[] | String of path

#### Return
`string`  
ex. '/Users/xxxx/xxxx/abc/def'

### `PathBuild.rootRelative(arr: string[]): string`

Create relative path from site root.  
`siteRoot` property + string[]    
`siteRoot` is defined using [config](https://www.npmjs.com/package/node-config)

parameter | type | description
--- | --- | ---
arr | string[] | String of path

#### Return
`string`    
ex. '/abc/def/'
