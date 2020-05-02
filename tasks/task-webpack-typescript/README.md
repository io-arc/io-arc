# `@io-arc/task-webpack-typescript`

Typescript compile for webpack.

## Usage

```javascript
const js = require('@io-arc/task-webpack-typescript').js

module.exports = js
```

## Workspace

Workspace default is `src/js`.

If need for change the workspace then set in [config](https://www.npmjs.com/package/node-config).  
Config key is `wsDir.js`.

## Build option

[config](https://www.npmjs.com/package/node-config) to configure the build option.  
Reference to [@io-arc/env](https://github.com/io-arc/io-arc/packages/env).

| options               | define                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| minify                | [`JS_MINIFY`](https://github.com/io-arc/io-arc/packages/env#js_minify)                            |
| using file-loader     | [`USE_JS_FILE_LOADER`](https://github.com/io-arc/io-arc/packages/env#use_js_file_loader)          |
| image hash            | [`IS_HASH_JS_FILE_LOADER`](https://github.com/io-arc/io-arc/packages/env#use_hash_js_file_loader) |
| tsconfig              | [`TSCONFIG`](https://github.com/io-arc/io-arc/packages/env#tsconfig)                              |
| split common filename | [`JS_SPLIT_FILENAME`](https://github.com/io-arc/io-arc/packages/env#js_split_filename)            |
| source map            | [`JS_SOURCE_MAP`](https://github.com/io-arc/io-arc/packages/env#js_source_map)                    |

## Features

### Splitting the common logic

If two or more files have common logic, extract the common logic and put it in a separate file.  
For example, it's useful when you have a library like lodash or jQuery.

You can specify the file name of the common logic.

### Constants

Constants configure to [config](https://www.npmjs.com/package/node-config).

| constants       | config key                                          | description                                   | @io-arc/env                                                                          |
| --------------- | --------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------ |
| `IS_PRODUCTION` | `NODE_ENV=production(development)` in `npm scripts` | Whether the build mode is "production" or not |                                                                                      |
| `TITLE`         | `title`                                             | Site title                                    | [`SITE_TITLE`](https://github.com/io-arc/io-arc/packages/env#site_title)             |
| `URL`           | `url` and `siteRoot`                                | Site URL                                      | [`SITE_URL`](https://github.com/io-arc/io-arc/packages/env#site_url)                 |
| `AUTHOR`        | `author`                                            | Site author                                   | [`SITE_AUTHOR`](https://github.com/io-arc/io-arc/packages/env#site_author)           |
| `SITE_ROOT`     | `siteRoot`                                          | Site root path (e.g. /)                       | [`SITE_DESCRIPTION`](https://github.com/io-arc/io-arc/packages/env#site_description) |

### Using library visualizer

Using [webpack-visualizer-plugin](https://github.com/chrisbateman/webpack-visualizer).  
Visualizer build run to mode is "once".

Output is `<project directory>/stats`.

### Web Worker

Create a web worker using [worker-loader](https://github.com/webpack-contrib/worker-loader).  
This description to [@io-arc/webpack-loader-js](https://github.com/io-arc/io-arc/packages/webpack-loaders-js#variable-workerloader).