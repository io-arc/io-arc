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

## Select language and frameworks

### HTML template engine

- HTML (with handlebars) - [Task document](tasks/task-webpack-html)
- Pug - [Task document](tasks/task-webpack-pug)

The global constants that are available: [HTML (with handlebars)](tasks/task-webpack-html#features), [Pug](tasks/task-webpack-pug#features)

### CSS language

- CSS - [Task document](tasks/task-webpack-css)
- SASS(SASS/SCSS) - [Task document](tasks/task-webpack-sass)
- Stylus - [Task document](tasks/task-webpack-stylus)

### JS preprocessor

- Babel - [Task document](tasks/task-webpack-babel)
- TypeScript - [Task document](tasks/task-webpack-typescript)

#### JS framework

Automatically available in selected preprocessors.

- Vue (Babel/TypeScript) - [Task document (Vue)](tasks/task-webpack-vue), [Task document (TypeScript)](tasks/task-webpack-vue-typescript)

## Local Server

- [BrowserSync](https://browsersync.io/) - [Task document](tasks/task-browser-sync)

## Other default use

- File copy - [Task document](tasks/task-copy)
- YAML to JSON file build - [Task document](tasks/task-yaml2json)
- Build directory clean - [Task document](tasks/task-clean)
- Stats for library used
- Create manifest.json - [Task document](tasks/task-manifest)
- Create Web Worker (Use [worker-loader](https://github.com/webpack-contrib/worker-loader)) - [Task document](packages/webpack-loaders-js#variable-workerloader)
- Create Service Worker (Use [WorkBox](https://developers.google.com/web/tools/workbox/modules/workbox-build)) - [Task document](tasks/task-service-worker)

### How to create manifest.json

Put manifest.yml or manifest\*\*.yml(e.g. manifest-ios.yml) directly under the workspace.  
If the file name is prefix with '\_'(e.g. `_manifest.yml`), it is not applicable.

[Task document](tasks/task-manifest#specification)

### How to create service-worker file

Execute `src/sw.js` if it exists.  
It is created using `generateSW` of [WorkBox](https://developers.google.com/web/tools/workbox/modules/workbox-build).  
[Task document](tasks/task-service-worker)

To make the Service Worker work, put the following in the `<head>`.

```javascript
// example
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function (registration) {
      console.log(
        'ServiceWorker registration successful with scope: ',
        registration.scope
      )
    })
    .catch(function (err) {
      console.log('ServiceWorker registration failed: ', err)
    })
}
```

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
    │   └ webpack.extend.js
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

### Build settings

The build configuration is done in `local.yml`.  
See example for [local.yml](packages/env/config/local.yml).

## Extending the webpack build

There are several extensions available on the user side as well.  
The extension is configured in `<project>/config/webpack.extend.js`.

The extensible webpack options are as follows.

- [externals](https://webpack.js.org/configuration/externals/)
- [module rule](https://webpack.js.org/configuration/module/#rule)
- [plugins](https://webpack.js.org/configuration/plugins/)

See [example](example/config/webpack.extend.js).

## Using undefined [node-config](https://github.com/lorenwest/node-config) data on the client side

If you want to use global constants other than those available in [TypeScript](https://github.com/io-arc/io-arc/tree/master/tasks/task-webpack-typescript#constants) and [Babel](https://github.com/io-arc/io-arc/tree/master/tasks/task-webpack-babel#constants), you can use `CONFIG` global constants.

```yaml
# config/local-development.yml
api: https://foo.com
```

```javascript
console.log(CONFIG.api)
// result => https://foo.com
```

\* If you are using TypeScript, please define the type by yourself.
