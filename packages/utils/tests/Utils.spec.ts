import { AssetsDirPath } from '../src'
import { SITE_ROOT } from '@io-arc/env'

test('Assets directory path', () => {
  expect(AssetsDirPath(['common', 'css'])).toBe(`${SITE_ROOT}common/css`)
})
