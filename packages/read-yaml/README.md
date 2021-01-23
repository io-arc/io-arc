# `@io-arc/read-yaml`

Transpile YAML to JSON.

See the [documents](https://io-arc.tech/plugins/module-read-yaml.html).

## Install

```shell
$ npm i @io-arc/read-yaml
```

## Usage

```typescript
import ReadYaml from '@io-arc/read-yaml'

const json = ReadYaml('foo', ['data'])
// -> read to data/foo.yml
```
