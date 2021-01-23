# `@io-arc/webpack-loaders-js`

A webpack loader for handling Babel and TypeScript.

See the [documents](https://io-arc.tech/plugins/module-webpack-loaders-js.html).

## Install

```shell
$ npm i @io-arc/webpack-loaders-js
```

## Usage

```typescript
import { yamlLoader } from '@io-arc/webpack-loaders-js'

export default {
  // (abbreviation)
  module: {
    rules: [yamlLoader]
  }
}
```
