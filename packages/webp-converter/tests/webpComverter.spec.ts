import { TFileName } from '@io-arc/types'
import WebpConverter from '../lib'

test('Get target directory', () => {
  const webp = new WebpConverter(['tests', 'img'])
  expect(webp.targetDirectory()).toBe('tests/img')
})

test('Regular expressions for file extensions', () => {
  const webp1 = new WebpConverter(['tests', 'img'])
  expect(webp1.regExp4FileExtensions()).toStrictEqual(
    /^(?!_).*\.(png|jpg|jpeg)$/
  )

  const webp2 = new WebpConverter(['tests', 'img'], {
    png: true,
    jpg: true,
    gif: true
  })
  expect(webp2.regExp4FileExtensions()).toStrictEqual(
    /^(?!_).*\.(png|jpg|jpeg|gif)$/
  )
})

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

test('Delete all webp files', (done) => {
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

  webp.convertAll().subscribe({
    complete() {
      webp.removeAll().subscribe(
        (filename) => expect(res.includes(filename)).toBeTruthy(),
        (error) => console.error(error),
        () => done()
      )
    }
  })
})

test('Delete single webp file', (done) => {
  const webp = new WebpConverter(
    ['tests', 'img'],
    {
      png: true,
      jpg: true,
      gif: true
    },
    undefined,
    undefined,
    ['dist', 'img']
  )

  webp.convertAll().subscribe({
    complete() {
      webp.remove('tests/img/bird.gif').subscribe(
        (filename) => expect(filename).toBe('dist/img/bird.webp'),
        (error) => console.error(error),
        () => done()
      )
    }
  })
})
