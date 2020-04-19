import {
  CSS_MINIFY,
  DEPLOY_IMG_ARRAY,
  DEPLOY_YAML2JSON_ARRAY,
  DIST,
  DIST_ABSOLUTE,
  HTML_MINIFY,
  IS_HASH_CSS_FILE_LOADER,
  IS_HASH_HTML_FILE_LOADER,
  IS_PRODUCTION,
  JSON_MINIFY,
  NODE_ENV,
  OUTPUT_CSS_ARRAY,
  OUTPUT_CSS_PATH_ABSOLUTE,
  OUTPUT_IMG_ARRAY,
  OUTPUT_IN_PHP,
  OUTPUT_JS_ARRAY,
  OUTPUT_JSON_ARRAY,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  SITE_ROOT,
  SITE_TITLE,
  SITE_URL,
  TARGET_HTML_FILE_LOADER,
  USE_CSS_FILE_LOADER,
  USE_HTML_FILE_LOADER,
  WS_CSS_ARRAY,
  WS_CSS_PATH,
  WS_CSS_PATH_ABSOLUTE,
  WS_HTML_ARRAY,
  WS_HTML_PATH,
  WS_HTML_PATH_ABSOLUTE,
  WS_IMG_PATH_ABSOLUTE,
  WS_ROOT,
  WS_STATIC_ARRAY,
  WS_STATIC_PATH,
  WS_YAML2JSON_ARRAY,
  WS_YAML2JSON_PATH
} from '../src'

test('Build mode is not production', () => {
  expect(IS_PRODUCTION).toBe(false)
})

test('Site root', () => {
  expect(SITE_ROOT).toBe('/test/')
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

test('Output CSS directory name array', () => {
  expect(OUTPUT_CSS_ARRAY).toEqual(['common', 'css'])
})

test('Output CSS directory absolute path', () => {
  expect(OUTPUT_CSS_PATH_ABSOLUTE).toBe(`${process.cwd()}/${DIST}/common/css`)
})

test('Output JavaScript directory name array', () => {
  expect(OUTPUT_JS_ARRAY).toEqual(['common', 'js'])
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
