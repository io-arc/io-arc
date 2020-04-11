import {
  DEPLOY_IMG_ARRAY,
  DEPLOY_YAML2JSON_ARR,
  DIST,
  HTML_MINIFY,
  IS_HASH_HTML_FILE_LOADER,
  IS_PRODUCTION,
  JSON_MINIFY,
  NODE_ENV,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  SITE_ROOT,
  SITE_TITLE,
  SITE_URL,
  siteRootRelative,
  TARGET_HTML_FILE_LOADER,
  USE_HTML_FILE_LOADER,
  WS_HTML_ARRAY,
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

test('Site root relative - unspecified', () => {
  expect(siteRootRelative([])).toBe(SITE_ROOT)
})

test('Site root relative - specified', () => {
  expect(siteRootRelative(['abc'])).toBe(`${SITE_ROOT}abc/`)
})

test('Output directory', () => {
  expect(DIST).toBe('dist')
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

test('HTML build using file-loader', () => {
  expect(USE_HTML_FILE_LOADER).toBe(true)
})

test('Is hash html loader', () => {
  expect(IS_HASH_HTML_FILE_LOADER).toBe(true)
})

test('Image build target for file-loader at HTML', () => {
  expect(TARGET_HTML_FILE_LOADER).toEqual([
    ':srcset',
    'img:src',
    'audio:src',
    'video:src',
    'source:src'
  ])
})

test('HTML minify', () => {
  expect(HTML_MINIFY).toBe(false)
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
  expect(DEPLOY_YAML2JSON_ARR).toEqual([DIST, 'common', 'data'])
})

test('Image directory absolute path', () => {
  expect(WS_IMG_PATH_ABSOLUTE).toBe(`${process.cwd()}/src/img`)
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
