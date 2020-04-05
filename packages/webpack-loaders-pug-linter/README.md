# `@io-arc/webpack-loaders-pug-linter`

Pug linter for webpack loader.

## Usage

```typescript
import PugLintLoader from '@io-arc/webpack-loaders-pug-linter'
import lint from '../.pug-lintrc.json'

export default {
  // (abbreviation)
  module: {
    rules: [
      PugLintLoader(/^(?!_).*\.pug$/, 'pug-lint-loader', lint)
    ]
  }
}
```

## Methods

### `PugLintLoader(regex: RegExp, loarder: string[, linter: object])`

`loader` is pug lint loader name.  
`linter` is not required.  
Where `linter` is specified, refer to [pug-lint](https://github.com/pugjs/pug-lint).