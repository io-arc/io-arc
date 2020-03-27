# `@io-arc/logger`

Console logging

## Usage

```
import Logger from '@io-arc/logging'

Logger.message('Success !!!!')
```

## Methods

No `New` instance.  
This class is static function.

### `Logger.message(message: string, color: Color): void`

General purpose log.  
`color` use the [kluer](https://github.com/lukeed/kleur)

### `Logger.start(task: string[, isBr: boolean = false]): void`

Task started log.  
`isBr` is optional whether to start a new line.  
Default: `false`

### `Logger.completed(task: string[, isBr: boolean = false]): void`

Task completed log in all green.  
`isBr` is optional whether to start a new line.  
Default: `false`

### `Logger.failed(task: string, error: Error | string | null[, isNotify: boolean = true]): void`

Task error log. 
`error` is Error object or string or null.  
`isNotify` is true, run Notify tools.