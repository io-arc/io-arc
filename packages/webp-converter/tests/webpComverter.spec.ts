import { TFileName } from '@io-arc/types'
import WebpConverter from '../lib'

test('Webp target is none', (done) => {
  const webp = new WebpConverter(['tests', 'img'], {
    png: false,
    jpg: false,
    gif: false
  })

  const arr: TFileName[] = []

  webp.convertAll().subscribe(
    (filename) => arr.push(filename),
    (error) => console.error(error),
    () => {
      expect(arr).toEqual([])
      done()
    }
  )
})

test('Webp all convert: convert to same directory', (done) => {
  const webp = new WebpConverter(['tests', 'img'], {
    png: true,
    jpg: true,
    gif: true
  })

  const res: string[] = [
    'tests/img/io-arc-ogp.webp',
    'tests/img/ooo/io-arc-ogp.webp',
    'tests/img/49735424706_7667261ef1_w.webp',
    'tests/img/bird.webp'
  ]

  webp.convertAll().subscribe(
    (filename) => expect(res.includes(filename)).toBeTruthy(),
    (error) => console.error(error),
    () => done()
  )
})

test('Webp all convert: convert to dist directory', (done) => {
  const webp = new WebpConverter(
    ['tests', 'img'],
    {
      png: true,
      jpg: false,
      gif: false
    },
    undefined,
    undefined,
    ['dist', 'common', 'img']
  )

  const res: string[] = [
    'dist/common/img/io-arc-ogp.webp',
    'dist/common/img/ooo/io-arc-ogp.webp'
  ]

  webp.convertAll().subscribe(
    (filename) => expect(res.includes(filename)).toBeTruthy(),
    (error) => console.error(error),
    () => done()
  )
})

test('Web single convert', (done) => {
  const webp = new WebpConverter(['tests', 'img'], {
    png: true,
    jpg: true,
    gif: true
  })

  webp.convert('tests/img/io-arc-ogp.png').subscribe(
    (filename) => expect(filename).toBe('tests/img/io-arc-ogp.webp'),
    (error) => console.error(error),
    () => done()
  )
})
