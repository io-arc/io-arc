# `@io-arc/webpack-loaders-js`

JavaScript/TypeScript/Babel build loader assets.

## Usage

```typescript
import { yamlLoader } from '@io-arc/webpack-loaders-js'

export default {
  // (abbreviation)
  module: {
    rules: [
      yamlLoader
    ]
  }
}
```

## Loader

### (variable) `yamlLoader`

Read YAML file.  
[json-loader](https://webpack.js.org/loaders/json-loader/) and [yaml-loader](https://github.com/eemeli/yaml-loader) need to be installed.