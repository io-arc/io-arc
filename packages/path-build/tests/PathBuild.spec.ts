import PathBuild from '../lib'

test('Relative', () => {
  expect(PathBuild.relative(['abc', 'def'])).toBe('abc/def')
})

test('Absolute', () => {
  expect(PathBuild.absolute(['abc', 'def'])).toBe(`${process.cwd()}/abc/def`)
})
