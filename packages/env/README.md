# `@io-arc/env`

Build environment define.

## Usage

```typescript
import { BUILD, MODE } from '@io-arc/env'

const build = BUILD.DEVELOPMENT
// -> 'development'

const mode = MODE.ONCE
// -> 'once'
```

## Constant

### `BUILD`

Readonly define build process environment.

#### Type

readonly string

#### Defined

| property            | string      |
| ------------------- | ----------- |
| `BUILD.DEVELOPMENT` | development |
| `BUILD.PRODUCTION`  | production  |
| `BUILD.TEST`        | test        |
| `BUILD.NONE`        | none        |

### `NODE_ENV`

Build environment.  
Using `process.env.NODE_ENV`.  
However, if `overrideEnv` is defined in using [config](https://www.npmjs.com/package/node-config), it can be overwritten.  
Default is `BUILD.DEVELOPMENT`.

#### Type

`BUILD`

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

### `MODE`

Readonly define build mode.

#### Type

readonly string

#### Defined

| property     | string |
| ------------ | ------ |
| `MODE.ONCE`  | once   |
| `MODE.WATCH` | watch  |

### `MODE_ENV`

Run environment.  
Using `process.env.MODE_ENV`.  
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

### `IS_PRODUCTION`

`NODE_ENV` is `BUILD.PRODUCTION` ?  
Result `boolean` type.

### `WS_ROOT`

Project working space directory.  
return `src`

### `DIST`

Build output directory.  
Define using [config](https://www.npmjs.com/package/node-config).

| data       | value       |
| ---------- | ----------- |
| config key | `outputDir` |
| default    | `dist`      |

### `WS_STATIC_ARRAY`

Working space for copy directory name array.  
Array first is `WS_ROOT` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value                 |
| ----------------- | --------------------- |
| config key        | `wsDir.static`        |
| default directory | `static`              |
| default result    | `[WS_ROOT, 'static']` |

### `WS_STATIC_PATH`

Working space for copy directory path.  
First string is `WS_ROOT` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value               |
| ----------------- | ------------------- |
| config key        | `wsDir.static`      |
| default directory | `static`            |
| default result    | `${WS_ROOT}/static` |

### `WS_HTML_ARRAY`

Working space for HTML (including Compiler) directory name array.  
Array first is `WS_ROOT` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value               |
| ----------------- | ------------------- |
| config key        | `wsDir.html`        |
| default directory | `html`              |
| default result    | `[WS_ROOT, 'html']` |

### `USE_HTML_FILE_LOADER`

HTML build using file-loader.  
\* Including Compiler

Define using [config](https://www.npmjs.com/package/node-config).  
[config](https://www.npmjs.com/package/node-config) property is `options.fileLoader.html.use`.

| data       | value                         |
| ---------- | ----------------------------- |
| config key | `options.fileLoader.html.use` |
| default    | `true`                        |

### `IS_HASH_HTML_FILE_LOADER`

HTML build using file-loader then judgment to adding 6-digit hash for image path.

- Including Compiler

Define using [config](https://www.npmjs.com/package/node-config).  
[config](https://www.npmjs.com/package/node-config) property is `options.fileLoader.html.hash`.

| data       | value                          |
| ---------- | ------------------------------ |
| config key | `options.fileLoader.html.hash` |
| default    | `true`                         |

### `TARGET_HTML_FILE_LOADER`

Image build target for file-loader at HTML.  
\* Including Compiler

Define using [config](https://www.npmjs.com/package/node-config).  
[config](https://www.npmjs.com/package/node-config) property is `options.fileLoader.html.target`.

| data       | value                                                            |
| ---------- | ---------------------------------------------------------------- |
| config key | `options.fileLoader.html.target`                                 |
| default    | `[':srcset', 'img:src', 'audio:src', 'video:src', 'source:src']` |

### `HTML_MINIFY`

HTML build minify option.  
\* Including Compiler

Define using [config](https://www.npmjs.com/package/node-config).  
[config](https://www.npmjs.com/package/node-config) property is `options.html.minify`.

| data       | value                 |
| ---------- | --------------------- |
| config key | `options.html.minify` |
| default    | `false`               |

### `WS_YAML2JSON_ARRAY`

Working space YAML to JSON directory path.  
Array first is `WS_ROOT` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value                    |
| ----------------- | ------------------------ |
| config key        | `wsDir.yaml2json`        |
| default directory | `yaml2json`              |
| default result    | `[WS_ROOT, 'yaml2json']` |

### `WS_YAML2JSON_PATH`

Working space YAML to JSON directory path.  
First string is `WS_ROOT` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value                  |
| ----------------- | ---------------------- |
| config key        | `wsDir.yaml2json`      |
| default directory | `yaml2json`            |
| default result    | `${WS_ROOT}/yaml2json` |

### `JSON_MINIFY`

YAML to JSON convert minify option.

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                 |
| ---------- | --------------------- |
| config key | `options.json.minify` |
| default    | `false`               |

### `DEPLOY_YAML2JSON_ARR`

YAML to JSON deploy directory array.  
Array first is `DIST` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value                     |
| ----------------- | ------------------------- |
| config key        | `deployDir.json`          |
| default directory | `['common', 'data']`      |
| default result    | `[DIST, 'common', 'data]` |

### `WS_IMG_PATH_ABSOLUTE`

Image directory path for using [file-loader](https://github.com/webpack-contrib/file-loader).  
First string is `process.cwd()` and `WS_ROOT` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value                             |
| ----------------- | --------------------------------- |
| config key        | `wsDir.img`                       |
| default directory | `img`                             |
| default result    | `${process.cwd()}/${WS_ROOT}/img` |

### `DEPLOY_IMG_ARRAY`

Image deploy directory array for using file-loader.  
Array first is `DIST` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value                     |
| ----------------- | ------------------------- |
| config key        | `deployDir.img`           |
| default directory | `['common', 'img']`       |
| default result    | `[DIST, 'common', 'img']` |

### `SITE_DOMAIN`

Website domain url.  
Site URL with no slash for last.

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value |
| ---------- | ----- |
| config key | `url` |
| default    | `''`  |

#### example

```
# default.yml

# Site URL with no slash for last
url: https://arc-one.jp
```

### `SITE_ROOT`

Website root.  
Slash the front and back.

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value      |
| ---------- | ---------- |
| config key | `siteRoot` |
| default    | `/`        |

#### example

```
# Site root is directly below the URL
siteRoot: /

# Site root isn't directly below the URL
# Slash the front and back.
siteRoot: /io-arc/
```

### `SITE_URL`

Website root url.
Using `SITE_DOMAIN` + `SITE_ROOT`.  
`SITE_DOMAIN` is empty then `SITE_URL` to empty.

#### example

```
# default.yml

# Site URL with no slash for last
url: https://arc-one.jp
siteRoot: /

# result
-> https://arc-one.jp

---
# default.yml
url: https://arc-one.jp
siteRoot: /io-arc/

# result
-> https://arc-one.jp/io-arc

---
# default.yml
url: ''
siteRoot: /io-arc/

# result
-> ''
```

### `SITE_TITLE`

Website title.

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value   |
| ---------- | ------- |
| config key | `title` |
| default    | `''`    |

### `SITE_AUTHOR`

Website author.

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value    |
| ---------- | -------- |
| config key | `author` |
| default    | `''`     |

### `SITE_DESCRIPTION`

Website description.

| data       | value         |
| ---------- | ------------- |
| config key | `description` |
| default    | `''`          |

## Functions

### `siteRootRelative(arr: string[]): string[]`

Create a relative path from site root.  
Site root define is `SITE_ROOT`.

#### example

```typescript
import { siteRootRelative } from '@io-arc/env'

const result1 = siteRootRelative([])
// -> '/'

const result2 = siteRootRelative(['abc', 'def'])
// -> '/abc/def/'
```
