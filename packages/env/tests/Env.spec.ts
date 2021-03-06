import {
  CSS_MINIFY,
  CSS_POSTCSS_MQ_PACKER,
  DEPLOY_IMG_ARRAY,
  DEPLOY_YAML2JSON_ARRAY,
  DIST,
  DIST_ABSOLUTE,
  ESLINT,
  HTML_MINIFY,
  IS_HASH_CSS_FILE_LOADER,
  IS_HASH_HTML_FILE_LOADER,
  IS_HASH_JS_FILE_LOADER,
  IS_PRODUCTION,
  JS_MINIFY,
  JS_SOURCE_MAP,
  JS_SPLIT_FILENAME,
  JS_TERSER,
  JSON_MINIFY,
  NODE_ENV,
  OUTPUT_CSS_ARRAY,
  OUTPUT_CSS_PATH_ABSOLUTE,
  OUTPUT_IMG_ARRAY,
  OUTPUT_IN_PHP,
  OUTPUT_JS_ARRAY,
  OUTPUT_JS_PATH_ABSOLUTE,
  OUTPUT_JSON_ARRAY,
  PUG_LINT_FILE,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  SITE_ROOT,
  SITE_TITLE,
  SITE_URL,
  TARGET_HTML_FILE_LOADER,
  TSCONFIG,
  USE_CSS_FILE_LOADER,
  USE_HTML_FILE_LOADER,
  USE_JS_FILE_LOADER,
  VUE_LOADER_ASSETS,
  VUE_PUG_LINT_FILE,
  WEBP_CONVERTER_CONFIG,
  WS_CSS_ARRAY,
  WS_CSS_PATH,
  WS_CSS_PATH_ABSOLUTE,
  WS_HTML_ARRAY,
  WS_HTML_PATH,
  WS_HTML_PATH_ABSOLUTE,
  WS_IMG_PATH_ABSOLUTE,
  WS_JS_ARRAY,
  WS_JS_PATH,
  WS_JS_PATH_ABSOLUTE,
  WS_ROOT,
  WS_ROOT_ABSOLUTE,
  WS_STATIC_ARRAY,
  WS_STATIC_PATH,
  WS_YAML2JSON_ARRAY,
  WS_YAML2JSON_PATH
} from '../lib'

test('Build mode is not production', () => {
  expect(IS_PRODUCTION).toBe(false)
})

test('Site root', () => {
  expect(SITE_ROOT).toBe('/test/')
})

test('Working space absolute path', () => {
  expect(WS_ROOT_ABSOLUTE).toBe(`${process.cwd()}/${WS_ROOT}`)
})

test('Output directory', () => {
  expect(DIST).toBe('dist')
})

test('Output directory path', () => {
  expect(DIST_ABSOLUTE).toBe(`${process.cwd()}/${DIST}`)
})

test('Current environment', () => {
  expect(NODE_ENV).toBe('test')
})

test('Static directory array', () => {
  expect(WS_STATIC_ARRAY).toEqual([WS_ROOT, 'static'])
})

test('Static directory path', () => {
  expect(WS_STATIC_PATH).toBe(`${WS_ROOT}/static`)
})

test('HTML directory array', () => {
  expect(WS_HTML_ARRAY).toEqual([WS_ROOT, 'html'])
})

test('HTML workspace path', () => {
  expect(WS_HTML_PATH).toBe(`${WS_ROOT}/html`)
})

test('HTML workspace absolute path', () => {
  expect(WS_HTML_PATH_ABSOLUTE).toBe(`${process.cwd()}/${WS_ROOT}/html`)
})

test('Pug compile output to PHP', () => {
  expect(OUTPUT_IN_PHP).toBe(false)
})

test('Get Pug lint file name', () => {
  expect(PUG_LINT_FILE).toBe('.pug-lintrc.json')
})

test('HTML build using file-loader', () => {
  expect(USE_HTML_FILE_LOADER).toBe(true)
})

test('Is hash html loader', () => {
  expect(IS_HASH_HTML_FILE_LOADER).toBe(true)
})

test('Image build target for file-loader at HTML', () => {
  expect(TARGET_HTML_FILE_LOADER).toEqual([
    {
      tag: 'img',
      attribute: 'src',
      type: 'src'
    },
    {
      tag: 'img',
      attribute: 'srcset',
      type: 'srcset'
    },
    {
      tag: 'img',
      attribute: 'data-src',
      type: 'src'
    },
    {
      tag: 'img',
      attribute: 'data-srcset',
      type: 'srcset'
    },
    {
      tag: 'source',
      attribute: 'src',
      type: 'src'
    }
  ])
})

test('HTML minify', () => {
  expect(HTML_MINIFY).toBe(false)
})

test('Working space CSS directory name array', () => {
  expect(WS_CSS_ARRAY).toEqual([WS_ROOT, 'css'])
})

test('Working space CSS directory path', () => {
  expect(WS_CSS_PATH).toBe(`${WS_ROOT}/css`)
})

test('Working space CSS directory absolute path', () => {
  expect(WS_CSS_PATH_ABSOLUTE).toBe(`${process.cwd()}/${WS_ROOT}/css`)
})

test('CSS build using file-loader', () => {
  expect(USE_CSS_FILE_LOADER).toBe(true)
})

test('Judgement to adding 6-digit hash for image path in CSS', () => {
  expect(IS_HASH_CSS_FILE_LOADER).toBe(true)
})

test('CSS build minify option', () => {
  expect(CSS_MINIFY).toBe(false)
})

test('Using mqpacker of postcss', () => {
  expect(CSS_POSTCSS_MQ_PACKER).toBe(true)
})

test('Output CSS directory name array', () => {
  expect(OUTPUT_CSS_ARRAY).toEqual(['common', 'css'])
})

test('Output CSS directory absolute path', () => {
  expect(OUTPUT_CSS_PATH_ABSOLUTE).toBe(`${process.cwd()}/${DIST}/common/css`)
})

test('Working space JS directory name array', () => {
  expect(WS_JS_ARRAY).toEqual([WS_ROOT, 'js'])
})

test('Working space JS directory path', () => {
  expect(WS_JS_PATH).toBe(`${WS_ROOT}/js`)
})

test('Working space JS directory absolute path', () => {
  expect(WS_JS_PATH_ABSOLUTE).toBe(`${process.cwd()}/${WS_ROOT}/js`)
})

test('TypeScript config file', () => {
  expect(TSCONFIG).toBe('tsconfig.json')
})

test('File names for splitting the common logic', () => {
  expect(JS_SPLIT_FILENAME).toBe('assets')
})

test('JS build source map option', () => {
  expect(JS_SOURCE_MAP).toBe(true)
})

test('ESLint config file', () => {
  expect(ESLINT).toBe('.eslintrc')
})

test('JS build using file-loader', () => {
  expect(USE_JS_FILE_LOADER).toBe(true)
})

test('Judgement to adding 6-digit hash for image path in JS', () => {
  expect(IS_HASH_JS_FILE_LOADER).toBe(true)
})

test('JS build minify option', () => {
  expect(JS_MINIFY).toBe(true)
})

test('JS Terser plugin option', () => {
  expect(JS_TERSER).toEqual({
    parallel: true,
    extractComments: false,
    terserOptions: { compress: { drop_console: true } }
  })
})

test('Output JavaScript directory name array', () => {
  expect(OUTPUT_JS_ARRAY).toEqual(['common', 'js'])
})

test('Output JS directory absolute path', () => {
  expect(OUTPUT_JS_PATH_ABSOLUTE).toBe(`${process.cwd()}/${DIST}/common/js`)
})

test('Pug lint filename for use by Vue', () => {
  expect(VUE_PUG_LINT_FILE).toBe('config-vue/.pug-lintrc.json')
})

test('vue-loader transformAssetUrls', () => {
  expect(VUE_LOADER_ASSETS).toEqual({
    video: ['src', 'poster'],
    source: 'src',
    img: 'src'
  })
})

test('Output JSON directory name array', () => {
  expect(OUTPUT_JSON_ARRAY).toEqual(['common', 'data'])
})

test('YAML to JSON directory array', () => {
  expect(WS_YAML2JSON_ARRAY).toEqual([WS_ROOT, 'yaml2json'])
})

test('YAML to JSON directory path', () => {
  expect(WS_YAML2JSON_PATH).toBe(`${WS_ROOT}/yaml2json`)
})

test('YAML to JSON convert minify option', () => {
  expect(JSON_MINIFY).toBe(true)
})

test('YAML to JSON deploy directory array', () => {
  expect(DEPLOY_YAML2JSON_ARRAY).toEqual([DIST, 'common', 'data'])
})

test('Image directory absolute path', () => {
  expect(WS_IMG_PATH_ABSOLUTE).toBe(`${process.cwd()}/src/img`)
})

test('Image output directory array', () => {
  expect(OUTPUT_IMG_ARRAY).toEqual(['common', 'img'])
})

test('Image deploy directory array', () => {
  expect(DEPLOY_IMG_ARRAY).toEqual([DIST, 'common', 'img'])
})

test('Website domain url', () => {
  expect(SITE_DOMAIN).toBe('https://arc-one.jp')
})

test('Website URL', () => {
  expect(SITE_URL).toBe('https://arc-one.jp/test')
})

test('Website title', () => {
  expect(SITE_TITLE).toBe('Hello!')
})

test('Website author', () => {
  expect(SITE_AUTHOR).toBe('arc one')
})

test('Website description', () => {
  expect(SITE_DESCRIPTION).toBe('Web boilerplate')
})

test('Webp converter config', () => {
  expect(WEBP_CONVERTER_CONFIG).toMatchObject([
    {
      target: ['src', 'img'],
      ext: { png: true, jpg: true, gif: true },
      options: { quality: 70 },
      gifOptions: { lossy: true },
      deleteBefore: true
    },
    {
      target: ['src', 'static'],
      ext: { png: true, jpg: true, gif: true },
      output: ['dist', 'common', 'img'],
      deleteBefore: false
    }
  ])
})
