import TargetDirectory from '../src'

test('Working directory array for key exists', () => {
  const res = TargetDirectory.wsArray('wsDir.static', 'j')
  expect(res).toEqual(['src', 'static'])
})

test('Working directory array for not key exists', () => {
  const res = TargetDirectory.wsArray('wsDir.json', 'data')
  expect(res).toEqual(['src', 'data'])
})

test('Working directory array for key empty', () => {
  const res = TargetDirectory.wsArray('wsDir.unknown', 'html')
  expect(res).toEqual(['src', 'html'])
})

test('Working directory path for key exists', () => {
  const res = TargetDirectory.wsPath('wsDir.js', 'js')
  expect(res).toBe('src/js')
})

test('Working directory path for not key exists', () => {
  const res = TargetDirectory.wsPath('wsDir.json', 'data')
  expect(res).toBe('src/data')
})
