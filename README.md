# io arc

It's so easy! build in 5 minutes! WEB/PWA/SPA boilerplate CLI.

<div align="center"><img src="images/logo.png" width="150" height="150" alt="io arc -WEB/PWA/SPA boilerplate CLI-"></div>

## Install

```shell script
$ npm i -g @io-arc/cli
# or
$ yarn global add @io-arc/cli
```

## Usage

```shell script
$ cd <Project Directory>
$ io-arc
```

[Documents](https://io-arc.tech/) | [Set up configuration](https://io-arc.tech/configuration/) | [Builds](https://io-arc.tech/build/)

## Select language and frameworks

### HTML template engine

- HTML (with handlebars)
- Pug

The global constants that are available: [HTML (with handlebars)](tasks/task-webpack-html#features), [Pug](tasks/task-webpack-pug#features)

### CSS language

- CSS
- SASS(SASS/SCSS)
- Stylus

### JS preprocessor

- Babel
- TypeScript

#### JS framework

Automatically available in selected preprocessors.

- Vue (Babel/TypeScript)

## Local Server

- [BrowserSync](https://browsersync.io/)

## Other default use

- File copy - ([documents](https://io-arc.tech/plugins/task-copy.html))
- YAML to JSON file build - ([documents](https://io-arc.tech/plugins/task-yaml2json.html))
- Build directory clean - ([documents](https://io-arc.tech/plugins/task-clean.html))
- Stats for library used
- Create manifest.json - ([documents](https://io-arc.tech/plugins/task-manifest.html))
- Create Web Worker (Use [worker-loader](https://github.com/webpack-contrib/worker-loader)) - ([documents](https://io-arc.tech/build/js.html#web-worker))
- Create Service Worker (Use [WorkBox](https://developers.google.com/web/tools/workbox/modules/workbox-build)) - ([documents](https://io-arc.tech/plugins/task-service-worker.html))

## Directory structure

Create directory structure below.

```text
<Project Directory>
    ├ config/ (settings)
    │   ├ default.yml (site settings)
    │   ├ development.yml
    │   ├ production.yml
    │   ├ local.yml (build settings)
    │   ├ local-development.yml
    │   ├ local-production.yml
    │   └ webpack.extends.js
    ├ config-vue/ (select Vue only)
    │   └ .pug-lintrc.json
    ├ src/ (working directory)
    │   ├ css/
    │   ├ html/
    │   ├ img/ (using file-loader)
    │   ├ js/
    │   ├ static/ (file copy)
    │   └ yaml2json/
    ├ types/ (select TypeScript only)
    ├ .babelrc (select Babel only)
    ├ .browserslistrc
    ├ .editorconfig
    ├ .eslintrc.yml
    ├ .pug-lintrc.json (select Pug only)
    ├ .gitignore
    ├ .npmrc
    ├ .prettierrc
    ├ tsconfig.json (select TypeScript only)
    ├ package.json
    └ webpack.config.js
```

## Build options

Internally, the build can be tweaked using the [node-config](https://github.com/lorenwest/node-config) library.

### Site settings

Settings related to the website, such as the site title, are specified in the `default.yml` or `development.yml` or `production.yml`.  
See example for [default.yml](packages/env/config/default.yml).

[See documents](https://io-arc.tech/configuration/site.html).

### Build settings

The build configuration is done in `local.yml`.  
See example for [local.yml](packages/env/config/local.yml).

[See documents](https://io-arc.tech/configuration/build.html).

## Extending the webpack build

There are several extensions available on the user side as well.  
The extension is configured in `<project>/config/webpack.extends.js`.

The extensible webpack options are as follows.

- [externals](https://webpack.js.org/configuration/externals/)
- [module rule](https://webpack.js.org/configuration/module/#rule)
- [plugins](https://webpack.js.org/configuration/plugins/)

See [example](example/config/webpack.extends.js).

[See documents](https://io-arc.tech/configuration/webpack.html).

## Using undefined [node-config](https://github.com/lorenwest/node-config) data on the client side

If you want to use global constants other than those available in TypeScript and Babel, you can use `CONFIG` global constants.

```yaml
# config/local-development.yml
api: https://foo.com
```

```javascript
console.log(CONFIG.api)
// result => https://foo.com
```

\* If you are using TypeScript, please define the type by yourself.
