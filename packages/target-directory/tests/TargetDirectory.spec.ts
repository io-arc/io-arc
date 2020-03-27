import TargetDirectory from '../src'

test('Avail working directory array', () => {
  const res = TargetDirectory.wsArray('wsDir.static', 'j')
  expect(res).toEqual(['src', 'static'])
})

test('Not avail working directory array', () => {
  const res = TargetDirectory.wsArray('wsDir.json', 'data')
  expect(res).toEqual(['src', 'data'])
})

test('Null name working directory array', () => {
  const res = TargetDirectory.wsArray('wsDir.unknown', 'html')
  expect(res).toEqual(['src', 'html'])
})

test('Avail working directory path', () => {
  const res = TargetDirectory.wsPath('wsDir.js', 'js')
  expect(res).toBe('src/js')
})

test('Not avail working directory path', () => {
  const res = TargetDirectory.wsPath('wsDir.json', 'data')
  expect(res).toBe('src/data')
})
