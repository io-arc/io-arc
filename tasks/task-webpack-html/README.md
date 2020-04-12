# `@io-arc/task-webpack-html`

HTML builds for [webpack](https://webpack.js.org/).

## Usage

```typescript
// webpack.config.js
const html = require('@io-arc/task-webpack-html').html

module.exports = html
```

## Workspace

Workspace is `src/html`.

If need for change the workspace then set in [config](https://www.npmjs.com/package/node-config).  
Config key is `wsDir.html`.

## Build option

[config](https://www.npmjs.com/package/node-config) to configure the build option.  
Reference to [@io-arc/env](https://github.com/io-arc/io-arc/packages/env).

| options            | define                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| minify             | [`HTML_MINIFY`](https://github.com/io-arc/io-arc/packages/env#html_minify)                            |
| using file-loader  | [`USE_HTML_FILE_LOADER`](https://github.com/io-arc/io-arc/packages/env#use_html_file_loader)          |
| image build target | [`TARGET_HTML_FILE_LOADER`](https://github.com/io-arc/io-arc/packages/env#target_html_file_loader)    |
| image hash         | [`IS_HASH_HTML_FILE_LOADER`](https://github.com/io-arc/io-arc/packages/env#uis_hash_html_file_loader) |

## Features

[Handlebars](https://handlebarsjs.com/) can be used, and the following constants are also available.  
Constants configure to [config](https://www.npmjs.com/package/node-config).

| constants       | config key                                          | description                                   | @io-arc/env
| --------------- | --------------------------------------------------- | --------------------------------------------- |
| `IS_PRODUCTION` | `NODE_ENV=production(development)` in `npm scripts` | Whether the build mode is "production" or not | \-
| `TITLE`         | `title`                                             | Site title                                    | [`SITE_TITLE`](https://github.com/io-arc/io-arc/packages/env#site_title)
| `URL`           | `url` and `siteRoot`                                | Site URL                                      | [`SITE_URL`](https://github.com/io-arc/io-arc/packages/env#site_url)
| `AUTHOR`        | `author`                                            | Site author                                   | [`SITE_AUTHOR`](https://github.com/io-arc/io-arc/packages/env#site_author)
| `DESCRIPTION`   | `description`                                       | Site description                              | [`SITE_DESCRIPTION`](https://github.com/io-arc/io-arc/packages/env#site_description)
| `SITE_ROOT`     | `siteRoot`                                          | Site root path (e.g. /)                       | [`SITE_DESCRIPTION`](https://github.com/io-arc/io-arc/packages/env#site_description)
| `CSS_DIR`       | `deployDir.css`                                     | CSS directory path (e.g. /common/css)         | [`OUTPUT_CSS_ARRAY`](https://github.com/io-arc/io-arc/packages/env#output_css_array)
| `IMG_DIR`       | `deployDir.img`                                     | Image directory path (e.g. /common/img)       | [`OUTPUT_IMG_ARRAY`](https://github.com/io-arc/io-arc/packages/env#output_img_array)
| `JS_DIR`        | `deployDir.js`                                      | JavaScript directory path (e.g. /common/js)   | [`OUTPUT_JS_ARRAY`](https://github.com/io-arc/io-arc/packages/env#output_js_array)
| `JSON_DIR`      | `deployDir.json`                                    | JSON directory path (e.g. /common/data)       | [`OUTPUT_JSON_ARRAY`](https://github.com/io-arc/io-arc/packages/env#output_json_array)