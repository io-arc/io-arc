# Babel

Reference see [@io-arc/task-webpack-babel](https://github.com/io-arc/io-arc/tree/master/tasks/task-webpack-babel).  
If using a [Vue.js](https://vuejs.org/index.html) then see [@io-arc/task-webpack-vue](https://github.com/io-arc/io-arc/tree/master/tasks/task-webpack-vue).

## Tips

### Using WebWorker

WebWorker file example.

```typescript
// src/js/worker/foo.js

const obj = { foo: 'foo' }
self.postMessage({ foo: 'foo' })

// Respond to message from parent thread
self.addEventListener('message', (event) => console.log(event, obj))
```

Call the WebWorker.

```typescript
// src/js/app.ts
import Worker from './worker/foo.js'

const worker = new Worker()
worker.postMessage({ a: 1 })
worker.onmessage = (event) => console.log(event)
worker.addEventListener('message', (event) => console.log(event))
```
