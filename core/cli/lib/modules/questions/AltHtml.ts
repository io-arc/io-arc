import inquirer from 'inquirer'
import BaseQuestions, { IoQuestions } from './BaseQuestions'

/** HTML template engine */
export const ALT_HTML_TYPE = {
  HTML: 'html',
  PUG: 'pug'
} as const

export type ALT_HTML_TYPE = typeof ALT_HTML_TYPE[keyof typeof ALT_HTML_TYPE]

/** Build file extension */
export const ALT_HTML_EXT = {
  HTML: 'html',
  PHP: 'php'
} as const

export type ALT_HTML_EXT = typeof ALT_HTML_EXT[keyof typeof ALT_HTML_EXT]

export interface IoAltHtml {
  engine: ALT_HTML_TYPE
  ext: ALT_HTML_EXT
}

export default class AltHtml extends BaseQuestions implements IoQuestions {
  #engine: ALT_HTML_TYPE = ALT_HTML_TYPE.HTML
  #ext: ALT_HTML_EXT = ALT_HTML_EXT.HTML

  /** Choice HTML template engine */
  public engine(): ALT_HTML_TYPE {
    return this.#engine
  }

  /** Choice build file extension */
  public ext(): ALT_HTML_EXT {
    return this.#ext
  }

  /** Choice HTML template engine */
  async questions(): Promise<void> {
    this.startLog('Select HTML template engine')

    const res: IoAltHtml | number = await inquirer
      .prompt<IoAltHtml>({
        type: 'list',
        name: 'engine',
        message: 'Template engine',
        choices: [
          { name: 'None (Vanilla HTML)', value: ALT_HTML_TYPE.HTML },
          { name: 'Pug', value: ALT_HTML_TYPE.PUG }
        ]
      })
      .catch((e: Error): number => {
        console.error(e)
        return 1
      })

    if (typeof res === 'number') {
      this.fail()
      return
    }

    this.#engine = res.engine
    await this.#buildExt(res.engine)
  }

  /** Get task library name */
  public taskLibrary() {
    switch (this.#engine) {
      case ALT_HTML_TYPE.HTML:
        return '@io-arc/task-webpack-html'
      case ALT_HTML_TYPE.PUG:
        return '@io-arc/task-webpack-pug'
      default:
        return null
    }
  }

  /**
   * If engine select to 'pug' then choice file extension
   * @param html
   */
  #buildExt = async (html: ALT_HTML_TYPE): Promise<void> => {
    if (html === 'html') return

    const res: IoAltHtml | number = await inquirer
      .prompt<IoAltHtml>({
        type: 'list',
        name: 'ext',
        message: 'Build file extension',
        choices: [
          { name: '.html', value: ALT_HTML_EXT.HTML },
          { name: '.php', value: ALT_HTML_EXT.PHP }
        ]
      })
      .catch((e: Error): number => {
        console.error(e)
        return 1
      })

    if (typeof res === 'number') {
      this.fail()
      return
    }

    this.#ext = res.ext
  }
}
