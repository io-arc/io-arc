import PathBuild from '../src'

test('Relative', () => {
  expect(PathBuild.relative(['abc', 'def'])).toBe('abc/def')
})

test('Absolute', () => {
  expect(PathBuild.absolute(['abc', 'def'])).toBe(`${process.cwd()}/abc/def`)
})

test('RootAbsolute no array', () => {
  expect(PathBuild.rootRelative([])).toBe('/')
})

test('RootAbsolute', () => {
  expect(PathBuild.rootRelative(['abc'])).toBe('/abc/')
})
