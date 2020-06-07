# Image directory

Directory for automatic building of images using [file-loader](https://webpack.js.org/loaders/file-loader/).  
It works only when `options > fileLoader > (html/css/js) > use` of `config/local.yml` is true.

## Usage

Specify the relative path from the file to the img directory.

### HTML

```html
<!-- src/html/index.html -->
<img src="../img/xx.png" alt="">
```

Build result:

```html
<!-- dist/index.html -->
<img src="/common/img/xx.png?123456" alt="">
```

### Pug

```pug
//- src/html/index.pug
img(src="../img/xx.png", alt="")
```

Build result:

```html
<!-- dist/index.html -->
<img src="/common/img/xx.png?123456" alt="">
```

### CSS/SASS(SCSS)/Stylus

```sass
// src/css/style.css
.img {
  background: url(../img/xx.png)
}
```

Build result:

```css
/* dist/common/css/style.css */
.img {
  background: url(/common/img/xx.png?123456)
}
```

### Babel/TypeScript

```typescript
// src/js/app.ts
import img from '../img/xx.png'
```

Build result:

```javascript
// dist/common/js/app.js
module.exports = "/common/img/xx.png?123456"
```