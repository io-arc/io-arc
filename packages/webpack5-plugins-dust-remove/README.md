# `@io-arc/webpack5-plugins-dust-remove`

A [webpack5](https://webpack.js.org/) plugin that removes dummy files generated when dummy files are used to avoid duplicate file names in HTML builds, etc.  
See the [documents](https://io-arc.tech/plugins/modules/webpack-plugins-task-message.html).

## Install

```shell
$ npm i -D @io-arc/webpack5-plugins-dust-remove
```

## Usage

```typescript
import DustRemovePlugin from '@io-arc/webpack5-plugins-dust-remove'

export default {
  // (abbreviation)
  plugins: [new DustRemovePlugin()]
}
```
