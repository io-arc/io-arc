# `@io-arc/webpack-settings`

Webpack build settings

## Usage

```typescript
import { stats, performance, progressBar } from '@io-arc/webpack-settings'
import progressBarPlugin from 'progress-bar-webpack-plugin'

export default {
  // (abbreviation)
  stats: stats(),
  performance: performance(),
  plugins: [new progressBarPlugin(progressBar('task name'))]
}
```

## Functions

### `stats(object?: boolean | "normal" | "none" | "verbose" | "errors-only" | "errors-warnings" | "minimal" | Configuration['stats'] | undefined)`

Parameter is optional.  
Parameter types reference to [webpack stats](https://webpack.js.org/configuration/stats/)

#### Default

```
{
  assets: true,
  assetsSort: 'field',
  cached: true,
  cachedAssets: true,
  children: false,
  chunks: false,
  chunkModules: false,
  chunkOrigins: false,
  chunksSort: 'field',
  colors: true,
  depth: false,
  entrypoints: false,
  errors: true,
  errorDetails: true,
  hash: undefined,
  modules: false,
  modulesSort: 'field',
  publicPath: true,
  reasons: false,
  source: true,
  timings: true,
  version: true,
  warnings: true
}
```

### `performance(object?: false | Configuration['performance'] | undefined)`

Parameter is optional.  
Parameter types reference to [webpack performance](https://webpack.js.org/configuration/performance/)

#### Default

```
{
  hints: 'error',
  maxEntrypointSize: 5e6,
  maxAssetSize: 10e6
}
```

### `progressBar(task: string): { format: string; clear: boolean }`

Using [progress-bar-webpack-plugin](https://github.com/clessg/progress-bar-webpack-plugin).

### Result

blue, yellow, green from [kleur](https://github.com/lukeed/kleur)

```
{
  format: `${blue(` ${task} `)} ${yellow(':percent')}/${green(':total%')} (:elapseds)`,
  clear: true
}
```
