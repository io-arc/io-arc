# `@io-arc/webpack-loaders-image`

Image deploy for using [file-loader](https://github.com/webpack-contrib/file-loader).  
Auto insert image path to HTML, CSS and JavaScript.

See the [documents](https://io-arc.tech/plugins/module-webpack-loaders-image.html).

## Install

```shell
$ npm i @io-arc/webpack-loaders-image
```

## Usage

```typescript
import { ImageLoader } from '@io-arc/webpack-loaders-image'
import { DEPLOY_IMG_ARRAY } from '@io-arc/env'

export default {
  // (abbreviation)
  module: {
    rules: [ImageLoader([], DEPLOY_IMG_ARRAY, true)]
  }
}
```
