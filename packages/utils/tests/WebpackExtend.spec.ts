import { WebpackExtend } from '../lib'

describe('Webpack Extend', () => {
  // WARNING: Please remove the file before running this test.
  // it('No File', () => {
  //   const extend = new WebpackExtend('js')
  //   expect(extend.data()).toBe(null)
  // })

  it('No key', () => {
    const extend = new WebpackExtend('typescript')
    expect(extend.data()).toBe(null)
  })

  it('exist externals', () => {
    const extend = new WebpackExtend('js')
    expect(extend.externals()).toEqual({ jquery: 'jQuery' })
  })

  it('no exist externals', () => {
    const extend = new WebpackExtend('css')
    expect(extend.externals()).toBe(undefined)
  })
})
