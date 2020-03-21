import OutputDirDiff from '../src'

test('Output directory diff', () => {
  const dirDiff = new OutputDirDiff(['foo', 'bar'], ['foo'])

  expect(dirDiff.targetRelativePath()).toBe('../')
})
