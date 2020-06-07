import fs from 'fs'
import { TLibraryName } from './questions/BaseQuestions'
import { FileCreateError, FileCreateSuccess } from './Utils'

export default class WebpackFile {
  #body: string

  constructor(html: TLibraryName, css: TLibraryName, js: TLibraryName) {
    const arr = []
    if (html !== null) arr.push(`const { html } = require('${html}')`)
    if (css !== null) arr.push(`const { css } = require('${css}')`)
    if (js !== null) arr.push(`const { js } = require('${js}')`)

    this.#body = `${arr.join('\n')}

module.exports = [html, css, js]
`
  }

  public create(): void {
    try {
      fs.writeFileSync('webpack.config.js', this.#body)
      FileCreateSuccess('webpack.config.js')
    } catch (e) {
      FileCreateError('webpack.config.js', e)
    }
  }
}
