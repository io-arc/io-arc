# `@io-arc/env`

Build environment define.

See the [documents](https://io-arc.tech/plugins/modules/env/).

## Install

```shell
$ npm i @io-arc/env
```

## Usage

```shell
$  NODE_ENV=development MODE_ENV=once npm run XXX
```

```typescript
import { NODE_ENV, MODE_ENV, BUILD, MODE } from '@io-arc/env'

const isMinify = NODE_ENV === BUILD.PRODUCTION
// -> false

const isSIngle = MODE_ENV === MODE.ONCE
// -> true
```
