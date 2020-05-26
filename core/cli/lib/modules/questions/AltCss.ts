import inquirer from 'inquirer'
import BaseQuestions, { IoQuestions } from './BaseQuestions'

/** CSS language */
export const ALT_CSS_TYPE = {
  CSS: 'css',
  SASS: 'sass',
  STYLUS: 'stylus'
} as const

export type ALT_CSS_TYPE = typeof ALT_CSS_TYPE[keyof typeof ALT_CSS_TYPE]

export interface IoAltCss {
  lang: ALT_CSS_TYPE
}

export default class AltCss extends BaseQuestions implements IoQuestions {
  #lang: ALT_CSS_TYPE = ALT_CSS_TYPE.CSS

  /** Use CSS language */
  public lang(): ALT_CSS_TYPE {
    return this.#lang
  }

  /** Select CSS language */
  async questions(): Promise<void> {
    this.startLog('Select CSS Language')

    const res: IoAltCss | number = await inquirer
      .prompt<IoAltCss>([
        {
          type: 'list',
          name: 'lang',
          message: 'CSS language',
          choices: [
            { name: 'CSS (Vanilla)', value: ALT_CSS_TYPE.CSS },
            { name: 'Sass (SASS/SCSS)', value: ALT_CSS_TYPE.SASS },
            { name: 'Stylus', value: ALT_CSS_TYPE.STYLUS }
          ]
        }
      ])
      .catch((e: Error): number => {
        console.error(e)
        return 1
      })

    if (typeof res === 'number') {
      this.fail()
      return
    }

    this.#lang = res.lang
  }
}
