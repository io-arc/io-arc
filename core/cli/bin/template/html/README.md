# HTML

Reference see: [@io-arc/task-webpack-html](https://github.com/io-arc/io-arc/tree/master/tasks/task-webpack-html)

## Features

[Handlebars](https://handlebarsjs.com/) can be used, and the following constants are also available.  
The constants are be specified by [`config/default.yml`](../../config/default.yml).

| constants       | description                                   |
| --------------- | --------------------------------------------- |
| `IS_PRODUCTION` | Whether the build mode is `production` or not |
| `TITLE`         | Site title                                    |
| `URL`           | Site URL                                      |
| `AUTHOR`        | Site author                                   |
| `DESCRIPTION`   | Site description                              |
| `SITE_ROOT`     | Site root path (e.g. `/`)                     |
| `CSS_DIR`       | CSS directory path (e.g. `/common/css`)       |
| `IMG_DIR`       | Image directory path (e.g. `/common/img`)     |
| `JS_DIR`        | JavaScript directory path (e.g. `/common/js`) |
| `JSON_DIR`      | JSON directory path (e.g. `/common/data`)     |
