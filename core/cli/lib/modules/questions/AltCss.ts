import inquirer from 'inquirer'
import BaseQuestions, { IoQuestions } from './BaseQuestions'

export interface IoAltCss {
  lang: 'css' | 'sass' | 'stylus'
}

export default class AltCss extends BaseQuestions implements IoQuestions {
  #lang: IoAltCss['lang'] = 'css'

  /** Use CSS language */
  public lang(): IoAltCss['lang'] {
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
            { name: 'CSS (Vanilla)', value: 'css' },
            { name: 'Sass (SASS/SCSS)', value: 'sass' },
            { name: 'Stylus', value: 'stylus' }
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
