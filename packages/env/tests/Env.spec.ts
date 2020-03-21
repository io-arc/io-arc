import { DIST, NODE_ENV, SITE_ROOT } from '../src'

test('Site root', () => {
  expect(SITE_ROOT).toBe('/test/')
})

test('Output directory', () => {
  expect(DIST).toBe('dist')
})

test('Current environment', () => {
  expect(NODE_ENV).toBe('test')
})
