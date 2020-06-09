# `@io-arc/task-webpack-pug`

Pug compile for [webpack](https://webpack.js.org/).

## Usage

```typescript
// webpack.config.js
const html = require('@io-arc/task-webpack-pug').html

module.exports = html
```

## Workspace

Workspace is `src/html`.

If need for change the workspace then set in [config](https://www.npmjs.com/package/node-config).  
Config key is `wsDir.html`.

## Build option

[config](https://www.npmjs.com/package/node-config) to configure the build option.  
Reference to [@io-arc/env](https://github.com/io-arc/io-arc/tree/master/packages/env).

| options            | define                                                                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| php output         | [`OUTPUT_IN_PHP`](https://github.com/io-arc/io-arc/tree/master/packages/env#output_in_php)                        |
| minify             | [`HTML_MINIFY`](https://github.com/io-arc/io-arc/tree/master/packages/env#html_minify)                            |
| using file-loader  | [`USE_HTML_FILE_LOADER`](https://github.com/io-arc/io-arc/tree/master/packages/env#use_html_file_loader)          |
| image build target | [`TARGET_HTML_FILE_LOADER`](https://github.com/io-arc/io-arc/tree/master/packages/env#target_html_file_loader)    |
| image hash         | [`IS_HASH_HTML_FILE_LOADER`](https://github.com/io-arc/io-arc/tree/master/packages/env#uis_hash_html_file_loader) |

## Features

### Constants

Constants configure to [config](https://www.npmjs.com/package/node-config).

| constants       | config key                                          | description                                   | @io-arc/env                                                                                        |
| --------------- | --------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `IS_PRODUCTION` | `NODE_ENV=production(development)` in `npm scripts` | Whether the build mode is "production" or not |                                                                                                    |
| `TITLE`         | `title`                                             | Site title                                    | [`SITE_TITLE`](https://github.com/io-arc/io-arc/tree/master/packages/env#site_title)               |
| `URL`           | `url` and `siteRoot`                                | Site URL                                      | [`SITE_URL`](https://github.com/io-arc/io-arc/tree/master/packages/env#site_url)                   |
| `AUTHOR`        | `author`                                            | Site author                                   | [`SITE_AUTHOR`](https://github.com/io-arc/io-arc/tree/master/packages/env#site_author)             |
| `DESCRIPTION`   | `description`                                       | Site description                              | [`SITE_DESCRIPTION`](https://github.com/io-arc/io-arc/tree/master/packages/env#site_description)   |
| `SITE_ROOT`     | `siteRoot`                                          | Site root path (e.g. `/`)                     | [`SITE_ROOT`](https://github.com/io-arc/io-arc/tree/master/packages/env#site_root)                 |
| `CSS_DIR`       | `deployDir.css`                                     | CSS directory path (e.g. `/common/css`)       | [`OUTPUT_CSS_ARRAY`](https://github.com/io-arc/io-arc/tree/master/packages/env#output_css_array)   |
| `IMG_DIR`       | `deployDir.img`                                     | Image directory path (e.g. `/common/img`)     | [`OUTPUT_IMG_ARRAY`](https://github.com/io-arc/io-arc/tree/master/packages/env#output_img_array)   |
| `JS_DIR`        | `deployDir.js`                                      | JavaScript directory path (e.g. `/common/js`) | [`OUTPUT_JS_ARRAY`](https://github.com/io-arc/io-arc/tree/master/packages/env#output_js_array)     |
| `JSON_DIR`      | `deployDir.json`                                    | JSON directory path (e.g. `/common/data`)     | [`OUTPUT_JSON_ARRAY`](https://github.com/io-arc/io-arc/tree/master/packages/env#output_json_array) |

### Functions extended

#### `readYAML(path: string)`

Read YAML file.  
e.g. `- const foo = readYAML('assets/data/foo.yml')`

The file path can only be specified below the pug workspace.

### PHP filter

`<?php ... ?>` can be inserted.

```pug
div
  :php
    echo '1';
```

Result below.

```php
<div><?php echo '1'; ?></div>
```
