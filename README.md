# io-arc

Web Boilerplate CLI

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

- HTML (with handlebars)
- Pug

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

- File copy
- YAML to JSON file build
- Build directory clean
- Create manifest.json
- Create service-worker (Use [WorkBox](https://developers.google.com/web/tools/workbox/modules/workbox-build))

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
    │   └ local-production.yml
    ├ src/
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
    ├ .gitignore
    ├ .npmrc
    ├ .prettierrc
    ├ tsconfig.json (select TypeScript only)
    ├ package.json
    └ webpack.config.json
```

## Build options

Internally, the build can be tweaked using the [node-config](https://www.npmjs.com/package/node-config) library.

### Site settings

Settings related to the website, such as the site title, are specified in the `default.yml` or `development.yml` or `production.yml`.  
See example for [default.yml](./packages/env/config/default.yml).

### Build settings

The build configuration is be done in `local.yml`.  
See example for [local.yml](./packages/env/config/local.yml).
