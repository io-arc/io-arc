# Babel

Reference see [documents](https://io-arc.tech/build/js.html).

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

```javascript
// src/js/app.ts
import Worker from './worker/foo.js'

const worker = new Worker()
worker.postMessage({ a: 1 })
worker.onmessage = (event) => console.log(event)
worker.addEventListener('message', (event) => console.log(event))
```
