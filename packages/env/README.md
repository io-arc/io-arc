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

### `WS_ROOT_ABSOLUTE`

Project working space directory absolute path.  
First string is `process.cwd()` and `WS_ROOT` constant.

### `DIST`

Build output directory.  
Define using [config](https://www.npmjs.com/package/node-config).

| data       | value       |
| ---------- | ----------- |
| config key | `outputDir` |
| default    | `dist`      |

### `DIST_ABSOLUTE`

Output directory path.  
First string is `process.cwd()` and `DIST` constant.

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

Working space for HTML (including AltHTML) directory name array.  
Array first is `WS_ROOT` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value               |
| ----------------- | ------------------- |
| config key        | `wsDir.html`        |
| default directory | `html`              |
| default result    | `[WS_ROOT, 'html']` |

### `WS_HTML_PATH`

Working space for HTML (including AltHTML) directory path.  
Build for `WS_HTML_ARRAY` to path.

### `WS_HTML_PATH_ABSOLUTE`

Working space for HTML (including AltHTML) directory absolute path.  
First string is `process.cwd()` and build for `WS_HTML_ARRAY` constant.

### `OUTPUT_IN_PHP`

[Pug](https://pugjs.org/) compile output to PHP.

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value             |
| ---------- | ----------------- |
| config key | `options.pug.php` |
| default    | `false`           |

### `PUG_LINT_FILE`

[Pug](https://pugjs.org/) lint file name.

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value              |
| ---------- | ------------------ |
| config key | `options.pug.lint` |
| default    | `'.pug-lintrc'`    |

### `USE_HTML_FILE_LOADER`

HTML build using file-loader.  
\* Including AltHTML

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                         |
| ---------- | ----------------------------- |
| config key | `options.fileLoader.html.use` |
| default    | `true`                        |

### `IS_HASH_HTML_FILE_LOADER`

HTML build using file-loader then judgment to adding 6-digit hash for image path.  
\* Including AltHTML

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                          |
| ---------- | ------------------------------ |
| config key | `options.fileLoader.html.hash` |
| default    | `true`                         |

### `TARGET_HTML_FILE_LOADER`

Image build target for file-loader at HTML.  
\* Including AltHTML

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                            |
| ---------- | -------------------------------- |
| config key | `options.fileLoader.html.target` |
| default    | below                            |

#### Default

```
[
  { tag: 'img', attribute: 'src', type: 'src' },
  { tag: 'img', attribute: 'srcset', type: 'srcset' },
  { tag: 'img', attribute: 'data-src', type: 'src' },
  { tag: 'img', attribute: 'data-srcset', type: 'srcset' },
  { tag: 'source', attribute: 'src', type: 'src' }
]
```

### `HTML_MINIFY`

HTML build minify option.  
\* Including AltHTML

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                 |
| ---------- | --------------------- |
| config key | `options.html.minify` |
| default    | `false`               |

### `WS_CSS_ARRAY`

Working space for CSS (including AltCSS) directory name array.  
Array first is `WS_ROOT` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value              |
| ----------------- | ------------------ |
| config key        | `wsDir.css`        |
| default directory | `css`              |
| default result    | `[WS_ROOT, 'css']` |

### `WS_CSS_PATH`

Working space for CSS (including AltCSS) directory path.  
Build for `WS_CSS_ARRAY` to path.

### `WS_CSS_PATH_ABSOLUTE`

Working space for CSS (including AltCSS) directory absolute path.  
First string is `process.cwd()` and build for `WS_CSS_ARRAY` constant.

### `USE_CSS_FILE_LOADER`

CSS build using file-loader.  
\* Including AltCSS

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                        |
| ---------- | ---------------------------- |
| config key | `options.fileLoader.css.use` |
| default    | `true`                       |

### `IS_HASH_CSS_FILE_LOADER`

CSS build using file-loader then judgment to adding 6-digit hash for image path.  
\* Including AltCSS

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                         |
| ---------- | ----------------------------- |
| config key | `options.fileLoader.css.hash` |
| default    | `true`                        |

### `OUTPUT_CSS_ARRAY`

CSS output directory name array.  
\* Including AltCSS (e.g. Stylus)

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value               |
| ---------- | ------------------- |
| config key | `deployDir.css`     |
| default    | `['common', 'css']` |

### `OUTPUT_CSS_PATH_ABSOLUTE`

CSS output directory path.  
First string is `process.cwd()` and `DIST` constant.

### `WS_JS_ARRAY`

Working space for JS (including AltJS) directory name array.  
Array first is `WS_ROOT` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value              |
| ----------------- | ------------------ |
| config key        | `wsDir.js`         |
| default directory | `js`               |
| default result    | `[WS_ROOT, 'css']` |

### `WS_JS_PATH`

Working space for JS (including AltJS) directory path.  
Build for `WS_JS_ARRAY` to path.

### `WS_JS_PATH_ABSOLUTE`

Working space for JS (including AltJS) directory absolute path.  
First string is `process.cwd()` and build for `WS_JS_ARRAY` constant.

### `TSCONFIG`

TypeScript config file.  
Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                 |
| ---------- | --------------------- |
| config key | `options.js.tsconfig` |
| default    | `tsconfig.json`       |

### `JS_SPLIT_FILENAME`

File names for splitting the common logic.  
Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                      |
| ---------- | -------------------------- |
| config key | `options.js.splitFilename` |
| default    | `null`                     |

### `JS_SOURCE_MAP`

JS build source map output option.  
Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                  |
| ---------- | ---------------------- |
| config key | `options.js.sourceMap` |
| default    | `false`                |

### `ESLINT`

Only specified when not in the [ESLint](https://eslint.org/) configuration file format.  
Define using [config](https://www.npmjs.com/package/node-config).

| data       | value               |
| ---------- | ------------------- |
| config key | `options.js.eslint` |
| default    | `undefined`         |

### `USE_JS_FILE_LOADER`

JS build using file-loader.  
\* Including AltJS

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                       |
| ---------- | --------------------------- |
| config key | `options.fileLoader.js.use` |
| default    | `true`                      |

### `IS_HASH_JS_FILE_LOADER`

JS build using file-loader then judgment to adding 6-digit hash for image path.  
\* Including AltCSS

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                        |
| ---------- | ---------------------------- |
| config key | `options.fileLoader.js.hash` |
| default    | `true`                       |

### `OUTPUT_JS_ARRAY`

JavaScript output directory name array.  
\* Including AltJS (e.g. TypeScript)

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value              |
| ---------- | ------------------ |
| config key | `deployDir.js`     |
| default    | `['common', 'js']` |

### `OUTPUT_JS_PATH_ABSOLUTE`

JS output directory path.  
First string is `process.cwd()` and `DIST` constant.

### `VUE_LOADER_ASSETS`

[vue-loader](https://vue-loader.vuejs.org/) transformAssetUrls option.  
If it is not used, set `options.fileLoader.vue.use` to `false` to disable it.

Define using [config](https://www.npmjs.com/package/node-config).

| data                    | value                                          |
| ----------------------- | ---------------------------------------------- |
| deactivation/activation | `options.fileLoader.vue.use` (default: `true`) |
| config key              | `options.fileLoader.vue.loader                 |
| default                 | below                                          |

#### Default

[vue-loader](https://vue-loader.vuejs.org/options.html#transformasseturls) defaults.

```
{
  video: ['src', 'poster'],
  source: 'src',
  img: 'src',
  image: ['xlink:href', 'href'],
  use: ['xlink:href', 'href']
}
```

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

### `OUTPUT_JSON_ARRAY`

JSON output directory name array.

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value                |
| ---------- | -------------------- |
| config key | `deployDir.json`     |
| default    | `['common', 'data']` |

### `DEPLOY_YAML2JSON_ARRAY`

YAML to JSON deploy directory array.  
Array first is `DIST` constant.  
Result to `DIST` + `OUTPUT_JSON_ARRAY`.

### `WS_IMG_PATH_ABSOLUTE`

Image directory path for using [file-loader](https://github.com/webpack-contrib/file-loader).  
First string is `process.cwd()` and `WS_ROOT` constant.

Define using [config](https://www.npmjs.com/package/node-config).

| data              | value                             |
| ----------------- | --------------------------------- |
| config key        | `wsDir.img`                       |
| default directory | `img`                             |
| default result    | `${process.cwd()}/${WS_ROOT}/img` |

### `OUTPUT_IMG_ARRAY`

Image output directory name array for using file-loader.

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value               |
| ---------- | ------------------- |
| config key | `deployDir.img`     |
| default    | `['common', 'img']` |

### `DEPLOY_IMG_ARRAY`

Image deploy directory name array for using file-loader.  
Array first is `DIST` constant.  
Result to `DIST` + `OUTPUT_IMG_ARRAY`.

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

---
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

Define using [config](https://www.npmjs.com/package/node-config).

| data       | value         |
| ---------- | ------------- |
| config key | `description` |
| default    | `''`          |
