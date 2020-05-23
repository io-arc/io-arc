# `@io-arc/webpack-loaders-image`

Image deploy for using [file-loader](https://github.com/webpack-contrib/file-loader).  
Auto insert image path to HTML, CSS.

## Usage

```typescript
import { ImageLoader } from '@io-arc/webpack-loaders-image'
import { DEPLOY_IMG_ARRAY } from '@io-arc/env'

export default {
  // (abbreviation)
  module: {
    rules: [
      ImageLoader([], DEPLOY_IMG_ARRAY, true)
    ]
  }
}
```

## Functions

### `ImageLoader(base: string[], target: [], isHash: boolean): RuleSetRule`

Use [file-loader](https://github.com/webpack-contrib/file-loader) to get and build images with a specific extension.  
Return types `RuleSetRule` for [webpack](https://webpack.js.org/)

#### Parameters

parameter | description | example
--- | --- | ---
base | file deployment destinations | `['common', 'js']`
target | images deployment directory name array | `['common', 'js']` 
isHash | image path adding hash in 6-digit | `true`

#### example

Structure:

```text
working:
src/
  ├─ html/
  │   └─ index.html
  └─ img/
      └─ foo.png

build:
.
├─ index.html
└─ common/
      └─ img/
          └─ foo.png
```

```html
<img src="img/foo.png" alt="">
```

deployment below:

```html
<img src="/common/img/foo.png" alt="">
```