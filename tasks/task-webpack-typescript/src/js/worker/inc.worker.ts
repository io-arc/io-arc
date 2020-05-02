// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const ctx: Worker = self as any

// Post data to parent thread
ctx.postMessage({ foo: 'foo' })

// Respond to message from parent thread
ctx.addEventListener('message', (event) => console.log(event))

export default null as any
