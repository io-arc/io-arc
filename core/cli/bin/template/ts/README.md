# TypeScript

[Reference documents](https://io-arc.tech/build/js.html).

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
