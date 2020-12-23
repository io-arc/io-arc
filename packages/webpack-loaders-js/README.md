# `@io-arc/webpack-loaders-js`

JavaScript/TypeScript/Babel build loader assets.

## Usage

```typescript
import { yamlLoader } from '@io-arc/webpack-loaders-js'

export default {
  // (abbreviation)
  module: {
    rules: [yamlLoader]
  }
}
```

## Loader

### (variable) `yamlLoader`

Read YAML file.  
[yaml-loader](https://github.com/eemeli/yaml-loader) need to be installed.

#### example

```typescript
import abc from 'xxx/abc.yml'

console.log(abc.gef)
```

### (variable) `workerLoader`

Create a web worker.  
[worker-loader](https://github.com/webpack-contrib/worker-loader) need to be installed.

#### example

```typescript
// workers/Worker.ts
const ctx: Worker = self as any

// Post data to parent thread
ctx.postMessage({ foo: 'foo' })

// Respond to message from parent thread
ctx.addEventListener('message', (event) => console.log(event))

export default null as any
```

```typescript
// App.ts
import Worker from './workers/Worker'

const worker = new Worker()

worker.postMessage({ a: 1 })
worker.onmessage = (event) => {}

worker.addEventListener('message', (event) => {})
```

### (variable) `babelLoader`

Babel loader.  
Using [babel-loader](https://github.com/babel/babel-loader).

### `TypescriptLoader(vue: boolean = false)`

TypeScript loader.  
Using [ts-loader](https://github.com/TypeStrong/ts-loader).  
Parameter `true` is adding `.vue`.

### `EslintLoader(eslint: string = '')`

ESLint loader.  
Using [eslint-loader](https://github.com/webpack-contrib/eslint-loader)  
You can specify an arbitrary ESLint configuration file as an argument.
