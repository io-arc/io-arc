# Pug

Reference see: [@io-arc/task-webpack-pug](https://github.com/io-arc/io-arc/tree/master/tasks/task-webpack-pug)

## Features

### Constants

The constants are be specified by [`config/default.yml`](../../config/default.yml).

| constants          | description                                   |
| ------------------ | --------------------------------------------- |
| `IS_PRODUCTION`    | Whether the build mode is `production` or not |
| `SITE_TITLE`       | Site title                                    |
| `SITE_URL`         | Site URL                                      |
| `SITE_AUTHOR`      | Site author                                   |
| `SITE_DESCRIPTION` | Site description                              |
| `SITE_ROOT`        | Site root path (e.g. `/`)                     |
| `CSS_DIR`          | CSS directory path (e.g. `/common/css`)       |
| `IMG_DIR`          | Image directory path (e.g. `/common/img`)     |
| `JS_DIR`           | JavaScript directory path (e.g. `/common/js`) |
| `JSON_DIR`         | JSON directory path (e.g. `/common/data`)     |

### Functions extended

#### `readYAML(path: string)`

Read YAML file.  
e.g. `- const foo = readYAML('assets/data/foo.yml')`

The file path can only be specified below the pug workspace.

### PHP filter

`<?php ... ?>` can be inserted.

```pug
div
  :php
    echo '1';
```

Result below.

```php
<div><?php echo '1'; ?></div>
```
