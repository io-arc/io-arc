# `@io-arc/copy`

Copying files in a directory.

## Usage

```
$ NODE_ENV=development MODE=once ia-copy
```

## Parameters

`MODE=once`: Once run.  
`MODE=watch`: Watch run.

## Specification

The directory where the file is copied from uses [config](https://www.npmjs.com/package/node-config).  

### example

```yaml
# default.yml
wsDir:
  static: static
```

Result: `src/static`