# `@io-arc/task-webpack-sass`

Sass (SCSS/SASS) compile for webpack.

## Usage

```javascript
// webpack.config.js
const css = require('@io-arc/task-webpack-sass').css

module.exports = css
```

## Workspace

Workspace default is `src/css`.

If need for change the workspace then set in [config](https://www.npmjs.com/package/node-config).  
Config key is `wsDir.css`.

## Build option

[config](https://www.npmjs.com/package/node-config) to configure the build option.  
Reference to [@io-arc/env](https://github.com/io-arc/io-arc/packages/env).

| options           | define                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| minify            | [`CSS_MINIFY`](https://github.com/io-arc/io-arc/packages/env#css_minify)                            |
| using file-loader | [`USE_CSS_FILE_LOADER`](https://github.com/io-arc/io-arc/packages/env#use_css_file_loader)          |
| image hash        | [`IS_HASH_CSS_FILE_LOADER`](https://github.com/io-arc/io-arc/packages/env#uis_hash_css_file_loader) |

## Tips

### Using `node_modules` file

The first path `~` will be `node_modules`.

```scss
@import "~bootstrap/dist/css/bootstrap-reboot.min.css";
```
