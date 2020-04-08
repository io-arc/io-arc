# `@io-arc/yaml2josn`

YAML to JSON conversion

## Usage

Using [RxJS](https://rxjs-dev.firebaseapp.com/).

```typescript
import Yaml2Json from '@io-arc/yaml2josn'

const y2j = new Yaml2Json(['src', 'yaml'], ['dist', 'data'])
y2j.convertAll(false).subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

## Methods

### `new Yaml2Json(targetDir: string[], outputDir: string[])`

Class instance.  
Specify an array for the target directory and an array for the output directory.

ex. `src/yaml` => `['src', 'yaml']`

#### example

```typescript
import Yaml2Json from '@io-arc/yaml2josn'

const y2j = new Yaml2Json(['src', 'yaml'], ['dist', 'data'])
// target directory: src/yaml
// output directory: dist/data
```

### `convertAll(isMinify: boolean): Observable<string>`

Converts all YAMLs in a directory.  
Except for files that begin with an underscore.

`isMinify` is `true` for JSON to minify.

#### example

```typescript
import Yaml2Json from '@io-arc/yaml2josn'

const y2j = new Yaml2Json(['src', 'yaml'], ['dist', 'data'])
y2j.convertAll(false).subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

### `convert(filepath: string, isMinify: boolean): Observable<string>`

Convert the specified file.  
The `filepath` does not have to be the directory specified in the constructor.

#### example

```typescript
import Yaml2Json from '@io-arc/yaml2josn'

const y2j = new Yaml2Json(['src', 'yaml'], ['dist'])
y2j.convert('src/foo.yml', false).subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

### `removeAll([target: string]): Observable<string>`

If `target` is not specified, the output directory specified by a constructor.  
If you want to specify a location different from the destination, use the Glob pattern (ex. `foo/bar/**/*.json`).

#### example

```typescript
import Yaml2Json from '@io-arc/yaml2josn'

// remove 'dist/**/*.json'
const y2j = new Yaml2Json(['src', 'yaml'], ['dist'])
y2j.removeAll().subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)

// remove 'dist/data/**/*.json'
const y2j2 = new Yaml2Json(['src', 'yaml'], ['dist'])
y2j2.removeAll('dist/data/**/*.json').subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```

### `remove(key: string): Observable<string>`

Deletes the specified file from the output destination specified by a constructor.  
`key` is a file name only and no extension is be required.

#### example

```typescript
import Yaml2Json from '@io-arc/yaml2josn'

// remove 'dist/foo.json'
const y2j = new Yaml2Json(['src', 'yaml'], ['dist'])
y2j.remove('foo').subscribe(
  (filename) => console.log(filename),
  (err) => console.error(err),
  () => console.log('done')
)
```
