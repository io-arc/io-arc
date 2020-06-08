# `@io-arc/task-copy`

Copying files in a directory.

## Usage

```
$ NODE_ENV=development MODE=once ia-copy
```

## Parameters

`MODE=once`: Once run.  
`MODE=watch`: Watch run.

## Specification

The directory where the file copied from uses [config](https://www.npmjs.com/package/node-config).

### Default

Default settings when no definition made.

- Working space: `<project>/src/static`
- Output directory: `<project>/dist`

### example

```yaml
# default.yml
wsDir:
  static: static

outputDir: dist
```

Result:

- Working space: `<project>/src/static`
- Output directory: `<project>/dist`
