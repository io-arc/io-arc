# `@io-arc/logger`

Logging output to Terminal console.  
Use [Kleur](https://github.com/lukeed/kleur) to specify colors.  
[Kleur](https://github.com/lukeed/kleur) is also bundled, so no installation is required.

See the [documents](https://io-arc.tech/plugins/modules/logger.html).

## Install

```shell
$ npm i @io-arc/logger
```

## Usage

```typescript
import { blue } from 'kleur'
import Logger from '@io-arc/logger'

Logger.message('Success !!!!', blue)
```
