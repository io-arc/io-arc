# `@io-arc/webpack-settings`

Webpack build settings.

See the [documents](https://io-arc.tech/plugins/modules/webpack-settings.html).

## Install

```shell
$ npm i @io-arc/webpack-settings
```

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
