# `@io-arc/env`

Build environment define.

## Usage

```typescript
import { BUILD_ENV, MODE } from '@io-arc/env'

const build = BUILD_ENV.DEVELOPMENT
// -> 'development'

const mode = MODE.ONCE
// -> 'once'
```

## Data

### `BUILD_ENV`

Readonly define build process environment.

#### Type

readonly string

#### Defined

property | string
--- | ---
`BUILD_ENV.DEVELOPMENT` | development
`BUILD_ENV.PRODUCTION` | production
`BUILD_ENV.TEST` | test
`BUILD_ENV.NONE` | none


### `MODE`

Readonly define build mode.

#### Type

readonly string

#### Defined

property | string
--- | ---
`MODE.ONCE` | once
`MODE.WATCH` | watch

### `WS_ROOT`

Project working space directory.  
return `src`

### `SITE_ROTT`

Website root.  
Define using [config](https://www.npmjs.com/package/node-config)    
[config](https://www.npmjs.com/package/node-config) property is `siteRoot`.  
If not defined then `/`

### `DIST`

Build output directory.  
Define using [config](https://www.npmjs.com/package/node-config)      
[config](https://www.npmjs.com/package/node-config) property is `outputDir`.  
If not defined then `dist`

### `NODE_ENV`

Build environment.  
Using `process.env.NODE_ENV`.  
However, if `overrideEnv` is defined in using [config](https://www.npmjs.com/package/node-config), it can be overwritten.  
Default is `BUILD_ENV.DEVELOPMENT`.

#### Type

`BUILD_ENV`

#### example

```js
console.log(NODE_ENV)
// -> 'development'

process.env.NODE_ENV = 'production'
// -> 'production'
```

if npm scripts `NODE_ENV=foo XXX`.  

```yaml
# config/foo.yml

overrideEnv: development
```

result below.

```js
console.log(NODE_ENV)
// -> 'development
```

### `MODE_ENV`

Run environment.  
Using `process.env.MODE`.  
Default is `MODE.ONCE`.

#### Type

`MODE`

#### example

```js
console.log(MODE_ENV)
// -> 'once'

process.env.MODE = 'watch'
// -> 'watch'
```

if npm scripts `MODE_ENV=foo XXX`.  
