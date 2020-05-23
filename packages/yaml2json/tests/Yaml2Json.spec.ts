import Yaml2Json from '../lib'

test('Yaml2Json all convert', (done) => {
  const yaml2json = new Yaml2Json(['tests', 'yaml'], ['dist', 'data'])

  const arr: string[] = ['dist/data/sample.json', 'dist/data/sample2.json']

  yaml2json.convertAll(false).subscribe(
    (filename) => {
      expect(arr.includes(filename)).toBe(true)
    },
    (err) => console.error(err),
    () => done()
  )
})

test('Yaml2Json single convert', (done) => {
  const yaml2json = new Yaml2Json(['tests', 'yaml'], ['dist', 'data2'])

  yaml2json.convert('tests/yaml/sample.yml', false).subscribe(
    (filename) => {
      expect(filename).toEqual('dist/data2/sample.json')
    },
    (err) => console.error(err),
    () => done()
  )
})

test('Yaml2Json no exist convert', (done) => {
  const yaml2json = new Yaml2Json(['src', 'yaml'], ['dist', 'data3'])

  const arr: string[] = []

  yaml2json.convertAll(false).subscribe(
    (filename) => arr.push(filename),
    (err) => console.error(err),
    () => {
      expect(arr).toEqual([])
      done()
    }
  )
})

test('Yaml2Json remove all', (done) => {
  const yaml2json = new Yaml2Json(['tests', 'yaml'], ['dist', 'data3'])

  yaml2json.convertAll(false).subscribe({
    complete() {
      const arr = ['dist/data3/sample.json', 'dist/data3/sample2.json']
      yaml2json.removeAll().subscribe({
        next(filename) {
          expect(arr.includes(filename)).toBe(true)
        },
        complete() {
          done()
        }
      })
    }
  })
})

test('Yaml2Json single file remove', (done) => {
  const yaml2json = new Yaml2Json(['tests', 'yaml'], ['dist', 'data4'])

  yaml2json.convertAll(false).subscribe({
    complete() {
      yaml2json.remove('sample').subscribe({
        next(filename) {
          expect(filename).toBe('dist/data4/sample.json')
        },
        complete() {
          done()
        }
      })
    }
  })
})

test('Yaml2Json single file remove error', (done) => {
  const yaml2json = new Yaml2Json(['tests', 'yaml'], ['dist', 'data5'])

  yaml2json.convertAll(false).subscribe({
    complete() {
      yaml2json.remove('sample.json').subscribe({
        error(err) {
          expect(err).not.toBeNull()
          done()
        }
      })
    }
  })
})
