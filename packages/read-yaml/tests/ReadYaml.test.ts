import { ReadYaml } from '../src'

test('translate YAML to JSON', () => {
  const res = ReadYaml('sample', ['tests'])
  expect(res).toMatchObject({ a: 'b' })
})
