import {
  DEPLOY_IMG_ARRAY,
  DEPLOY_YAML2JSON_ARR,
  DIST,
  JSON_MINIFY,
  NODE_ENV,
  SITE_ROOT,
  siteRootRelative,
  WS_IMG_PATH_ABSOLUTE,
  WS_ROOT,
  WS_STATIC_ARRAY,
  WS_STATIC_PATH,
  WS_YAML2JSON_ARRAY,
  WS_YAML2JSON_PATH
} from '../src'

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
