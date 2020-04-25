import { FileListObject } from '../lib'

test('Get all file list', () => {
  expect(FileListObject('tests/list', 'json')).toMatchObject({
    a: 'tests/list/a.json',
    b: 'tests/list/b.json',
    'example/c': 'tests/list/example/c.json'
  })
})

test('Get file list only root', () => {
  expect(FileListObject('tests/list', 'json', true)).toMatchObject({
    a: 'tests/list/a.json',
    b: 'tests/list/b.json'
  })
})
