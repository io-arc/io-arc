# `@io-arc/target-directory`

Get directory name array or path.

## Usage

```typescript
import TargetDirectory from '@io-arc/target-directory'

const wsJs = TargetDirectory.wsArr('wsDir.js', 'js')
```

## Methods

No `new` instance.  
This class is static function.

### `TargetDirectory.wsArr(key: string, defaultDir: string): string[]`

Get working directory name array.  
`key` is [config](https://www.npmjs.com/package/node-config) property.  
`defaultDir` is fallback directory name for `key` missing.

#### example

```yaml
# ex. default.yml
wsDir:
  js: js
```

```typescript
import TargetDirectory from '@io-arc/target-directory'

// Key exists
const wsJS = TargetDirectory.wsArr('wsDir.js', 'jsx')
console.log(wsJS)
// -> ['src', 'js']

// Not key exists
const wsJSON = TargetDirectory.wsArr('wsDir.json', 'data')
console.log(wsJSON)
// -> ['src', 'data']
```

### `TargetDirectory.wsPath(key: string, defaultDir: string): string`

Get working directory path.  
`key` is [config](https://www.npmjs.com/package/node-config) property.  
`defaultDir` is fallback directory name for `key` missing.

#### example

```yaml
# ex. default.yml
wsDir:
  js: js
```

```typescript
import TargetDirectory from '@io-arc/target-directory'

// Key exists
const js = TargetDirectory.wsPath('wsDir.js', 'jsx')
console.log(js)
// -> 'src/js'

// Not key exists
const json = TargetDirectory.wsPath('wsDir.json', 'data')
console.log(json)
// -> 'src/json'
```