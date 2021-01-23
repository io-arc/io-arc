# `@io-arc/webpack-loaders-pug-linter`

A webpack loader that handles Pug's Lint.

See the [documents](https://io-arc.tech/plugins/module-webpack-loaders-pug-linter.html).

## Install

```shell
$ npm i @io-arc/webpack-loaders-pug-linter
```

## Usage

```typescript
import PugLintLoader from '@io-arc/webpack-loaders-pug-linter'
import lint from './.pug-lintrc.json'

export default {
  // (abbreviation)
  module: {
    rules: [PugLintLoader(/^(?!_).*\.pug$/, 'pug-lint-loader', lint)]
  }
}
```
