# `@io-arc/task-manifest`

Create a manifest.json.

## Usage

```
$ NODE_ENV=development MODE=once ia-manifest
```

## Parameters

`MODE=once`: Once run.  
`MODE=watch`: Watch run.

## Specification

Put manifest.yml or manifest\*\*.yml(e.g. manifest-ios.yml) directly under the workspace.  
If the file name is prefix with '\_'(e.g. `_manifest.yml`), it is not applicable.

Property see is the [MDN](https://developer.mozilla.org/ja/docs/Web/Manifest).

## Default

If not specified in manifest.yml  
Default using [config](https://www.npmjs.com/package/node-config).  
Reference a [`@io-arc/env`](https://github.com/io-arc/io-arc/packages/env).

| property             | default                                                                   |
| -------------------- | ------------------------------------------------------------------------- |
| name                 | [`SITE_TITLE`](https://github.com/io-arc/io-arc/packages/env#site_title) |
| short_name           | [`SITE_TITLE`](https://github.com/io-arc/io-arc/packages/env#site_title) |
| scope                | [`SITE_ROOT`](https://github.com/io-arc/io-arc/packages/env#site_root)    |
| related_applications | `[]`                                                                      |
