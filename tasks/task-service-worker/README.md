# `@io-arc/task-service-worker`

Create a Service Worker.

## Usage

```shell script
$ ia-sw
```

\* There's no watch mode.

Execute `src/sw.js` if it exists.  
It is created using `generateSW` of [WorkBox](https://developers.google.com/web/tools/workbox/modules/workbox-build).

## sw.js

The minimum configuration required for execution.

```js
// src/sw.js
module.exports = {
  manifest: {}
}
```

The `globDirectory` and `swDest` properties, which are required by WorkBox, are ignored even if they are specified because they are generated automatically.

## Changing output file name

Default output file name is `sw.js`, but you can change the file name.

```js
// src/sw.js
module.exports = {
  filename: 'foo.js',
  manifest: {}
}

// output 'path/dist/foo.js'
```

## Manifest options

Take a look at [WorkBox > generateSW](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW)

### example

```js
// src/sw.js
module.exports = {
  manifest: {
    ignoreURLParametersMatching: [/^utm_/],
    directoryIndex: 'index.html',
    globFollow: true,
    globIgnores: ['node_modules/**/*'],
    sourcemap: false
  }
}
```

## Create a template

Command is `$ ia-sw -t` or `$ ia-sw --template`.  
Create a `sw.js` underneath the `src`.
