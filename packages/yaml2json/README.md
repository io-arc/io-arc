# `@io-arc/yaml2josn`

YAML to JSON conversion.  
Using [RxJS](https://rxjs-dev.firebaseapp.com/) (library included).

See the [documents](https://io-arc.tech/plugins/module-yaml2json.html).

## Install

```shell
$ npm i @io-arc/yaml2josn
```

## Usage

```typescript
import Yaml2Json from '@io-arc/yaml2josn'

const y2j = new Yaml2Json(['src', 'yaml'], ['dist', 'data'])
y2j.convertAll(false).subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```
