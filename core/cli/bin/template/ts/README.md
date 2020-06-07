# TypeScript

Reference see [@io-arc/task-webpack-typescript](https://github.com/io-arc/io-arc/tree/master/tasks/task-webpack-typescript).  
If using a [Vue.js](https://vuejs.org/index.html) then see [@io-arc/task-webpack-vue-typescript](https://github.com/io-arc/io-arc/tree/master/tasks/task-webpack-vue-typescript).

## Tips

### Using WebWorker

WebWorker file example.

```typescript
// src/js/worker/foo.ts

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const ctx: Worker = self as any

// Post data to parent thread
ctx.postMessage({ foo: 'foo' })

// Respond to message from parent thread
ctx.addEventListener('message', (event) => console.log(event))

export default null as any
```

Call the WebWorker.

```typescript
// src/js/app.ts
import Worker from './worker/foo.ts'

const worker = new Worker()
worker.postMessage({ a: 1 })
worker.onmessage = (event: Event): void => console.log(event)
worker.addEventListener('message', (event: Event): void => console.log(event))
```
