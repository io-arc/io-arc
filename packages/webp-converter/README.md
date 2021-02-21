# `@io-arc/webp-converter`

PNG, JPG, GIF files to Webp files conversions.  
What's [Webp](https://developers.google.com/speed/webp)?

Using to [imagemin](https://github.com/imagemin/imagemin).  
PNG, JPG is [imagemin-webp](https://github.com/imagemin/imagemin-webp).  
GIF is [imagemin-imagemin-gif2webp](https://github.com/imagemin/imagemin-gif2webp).

See the [documents](https://io-arc.tech/plugins/modules/webp-converter.html).

## Install

```shell
$ npm i -D @io-arc/webp-converter
```

## Usage

```typescript
import WebpConverter from '@io-arc/webp-converter'

const webp = new WebpConverter(
  ['src', 'img'],
  { png: true, jpg: true, gif: true },
  { quality: 75 },
  { lossy: true },
  ['dist', 'img']
)
```

More [documents](https://io-arc.tech/plugins/tasks/webp-converter.html).
