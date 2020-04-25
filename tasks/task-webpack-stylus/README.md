# `@io-arc/task-webpack-stylus`

Stylus compile for webpack.

## Usage

```javascript
// webpack.config.js
const css = require('@io-arc/task-webpack-stylus').css

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

## Features

### Auto insert Bender Prefix

Using [autoprefixer](https://autoprefixer.github.io/).  
You can use [browserslist](https://github.com/ai/browserslist) to specify.

### Consolidate to MediaQuery

Using [css-mqpacker](https://github.com/hail2u/node-css-mqpacker).

#### example

```stylus
body
  color: #000000
  @media screen and (max-width: 734px)
    color: #cc0000
  @media screen and (max-width: 1068px)
    color: #00cc00

p
  @media screen and (max-width: 1068px)
    color: #00cc00
```

Compile result below:

```css
body {
  color: #000;
}

@media screen and (max-width: 734px) {
  body {
    color: #c00;
  }
}

@media screen and (max-width: 1068px) {
  body {
    color: #0c0;
  }
  p {
    color: #0c0;
  }
}
```

## Tips

### Using `node_modules` file

The first path `~` will be `node_modules`.

```stylus
@require "~bootstrap/dist/css/bootstrap-reboot.min.css"
```
