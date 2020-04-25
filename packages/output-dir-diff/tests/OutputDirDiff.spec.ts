import OutputDirDiff from '../lib'

test('Output directory diff', () => {
  const dirDiff = new OutputDirDiff(['foo', 'bar'], ['foo'])

  expect(dirDiff.targetRelativePath()).toBe('../')
})
