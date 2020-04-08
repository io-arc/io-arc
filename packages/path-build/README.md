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

Create a absolute path from root.

#### example

```typescript
import PathBuild from '@io-arc/path-build'

const result = PathBuild.absolute(['abc', 'def'])
// -> '/Users/foo/bar/abc/def'
```
