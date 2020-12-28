# `@io-arc/task-webpack-sass`

Sass (SCSS/SASS) compile for webpack.

## Usage

```javascript
// webpack.config.js
const { css } = require('@io-arc/task-webpack-sass')

module.exports = css
```

## Workspace

Workspace default is `src/css`.

If need for change the workspace then set in [config](https://github.com/lorenwest/node-config).  
Config key is `wsDir.css`.

## Build option

[config](https://github.com/lorenwest/node-config) to configure the build option.  
Reference to [@io-arc/env](https://github.com/io-arc/io-arc/tree/master/packages/env).

| options                                                                | define                                                                                                          |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| minify                                                                 | [`CSS_MINIFY`](https://github.com/io-arc/io-arc/tree/master/packages/env#css_minify)                            |
| using [node-css-mqpacker](https://github.com/hail2u/node-css-mqpacker) | [`CSS_POSTCSS_MQ_PACKER`](https://github.com/io-arc/io-arc/tree/master/packages/env#css_css_postcss_mq_packer)  |
| using file-loader                                                      | [`USE_CSS_FILE_LOADER`](https://github.com/io-arc/io-arc/tree/master/packages/env#use_css_file_loader)          |
| image hash                                                             | [`IS_HASH_CSS_FILE_LOADER`](https://github.com/io-arc/io-arc/tree/master/packages/env#uis_hash_css_file_loader) |

## Features

### Auto insert Bender Prefix

Using [autoprefixer](https://autoprefixer.github.io/).  
You can use [browserslist](https://github.com/ai/browserslist) to specify.

### Consolidate to MediaQuery

Using [css-mqpacker](https://github.com/hail2u/node-css-mqpacker).  
[node-css-mqpacker](https://github.com/hail2u/node-css-mqpacker) can be configured to be used in config.

#### example

```scss
body {
  color: #000000;
  @media screen and (max-width: 734px) {
    color: #cc0000;
  }
  @media screen and (max-width: 1068px) {
    color: #00cc00;
  }
}

p {
  @media screen and (max-width: 1068px) {
    color: #00cc00;
  }
}
```

Compile result below:

```css
body {
  color: #000000;
}

@media screen and (max-width: 734px) {
  body {
    color: #cc0000;
  }
}

@media screen and (max-width: 1068px) {
  body {
    color: #00cc00;
  }
  p {
    color: #00cc00;
  }
}
```

## Tips

### Using `node_modules` file

The first path `~` will be `node_modules`.

```scss
@import '~bootstrap/dist/css/bootstrap-reboot.min.css';
```
