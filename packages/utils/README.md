# `@io-arc/utils`

Utility functions

## Usage

```typescript
import { AssetsDirPath } from '@io-arc/utils'

const res = AssetsDirPath(['common', 'css'])
```

## Functions

### `AssetsDirPath(dir: string[]): string`

Website assets directory path.

### `siteRootRelative(arr: string[]): string[]`

Create a relative path from site root.  
Site root define is `SITE_ROOT`.

#### example

```typescript
import { siteRootRelative } from '@io-arc/utils'

const result1 = siteRootRelative([])
// -> '/'

const result2 = siteRootRelative(['abc', 'def'])
// -> '/abc/def/'
```
