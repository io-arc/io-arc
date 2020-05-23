import { AssetsDirPath, siteRootRelative } from '../lib'
import { SITE_ROOT } from '@io-arc/env'

test('Assets directory path', () => {
  expect(AssetsDirPath(['common', 'css'])).toBe(`${SITE_ROOT}common/css`)
})

test('Site root relative - unspecified', () => {
  expect(siteRootRelative([])).toBe(SITE_ROOT)
})

test('Site root relative - specified', () => {
  expect(siteRootRelative(['abc'])).toBe(`${SITE_ROOT}abc/`)
})
