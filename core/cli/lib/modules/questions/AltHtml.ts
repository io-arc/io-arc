import inquirer from 'inquirer'
import BaseQuestions, { IoQuestions } from './BaseQuestions'

export interface IoAltHtmlQuestions {
  engine: 'html' | 'pug'
  ext: 'html' | 'php'
}

export default class AltHtml extends BaseQuestions implements IoQuestions {
  #engine: IoAltHtmlQuestions['engine'] = 'html'
  #ext: IoAltHtmlQuestions['ext'] = 'html'

  /** HTML template engine */
  public engine(): IoAltHtmlQuestions['engine'] {
    return this.#engine
  }

  /** Build file extension */
  public ext(): IoAltHtmlQuestions['ext'] {
    return this.#ext
  }

  /** Choice HTML template engine */
  async questions(): Promise<void> {
    this.startLog('Select HTML template engine')

    const res: IoAltHtmlQuestions | number = await inquirer
      .prompt<IoAltHtmlQuestions>({
        type: 'list',
        name: 'engine',
        message: 'Template engine',
        choices: [
          { name: 'none (plain HTML)', value: 'html' },
          { name: 'Pug', value: 'pug' }
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

  /**
   * If engine select to 'pug' then choice file extension
   * @param html
   */
  #buildExt = async (html: IoAltHtmlQuestions['engine']): Promise<void> => {
    if (html === 'html') return

    const res: IoAltHtmlQuestions | number = await inquirer
      .prompt<IoAltHtmlQuestions>({
        type: 'list',
        name: 'ext',
        message: 'Build file extension',
        choices: [
          { name: '.html', value: 'html' },
          { name: '.php', value: 'php' }
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
