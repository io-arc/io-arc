# `@io-arc/task-browser-sync`

Run BrowserSync

## Usage

```shell script
$ ia-browser-sync
```

## Command options

### `ia-browser-sync -p <ip address>` or `ia-browser-sync --proxy <ip address>`

Using proxy.  
Specify an IP address for the argument.

### `ia-browser-sync --history <file path>`

File paths used by the HTML5 HistoryAPI.  
e.g. /index.html

## Configure file

If you want to make detailed settings, please prepare and specify a configuration file.  
The configuration file is be placed in the `config` directory.

### Valid file name

- browser-sync.yml
- browser-sync.yaml
- bs.yml
- bs.yaml

If there are more than one valid files, they are prioritized in the order listed above.  
Options see: [BrowserSync option](https://browsersync.io/docs/options)

## Default

Some parameters are be specified automatically if not specified.

### `server`

Default: [`DIST`](https://github.com/io-arc/io-arc/packages/env#dist)/

\* If proxy parameter exists then auto delete `server`

### `serveStatic`

Default: `{ route: [SITE_ROOT], dir: DIST}`

\* [`SITE_ROOT`](https://github.com/io-arc/io-arc/packages/env#site_root) don't `/`
