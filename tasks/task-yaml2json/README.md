# `@io-arc/task-yaml2json`

YAML to JSON conversion

## Usage

```
$ NODE_ENV=development MODE=once ia-yaml2json
```

## Parameters

`MODE=once`: Once run.  
`MODE=watch`: Watch run.

## Specification

The directory where the file copied from uses [config](https://www.npmjs.com/package/node-config).  

### Default

Default settings when no definition made.

- Working space: `<project>/src/yaml2json`
- Output directory: `dist`
- Deploy a directory: `<project>/dist/common/json`
- Minify: `false`

### example

```yaml
# default.yml
wsDir:
  yaml2json: y2j

outputDir: dist

deployDir:
  json: [json] 

options:
  json:
    minify: true
```

Result:  

- Working space: `<project>/src/y2j`
- Output directory: `<project>/dist`
- Deploy a directory: `<project>/dist/json`
- Minify a convert: `true`
