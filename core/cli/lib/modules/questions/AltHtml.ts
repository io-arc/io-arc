import inquirer from 'inquirer'
import BaseQuestions, { IoQuestions } from './BaseQuestions'

export interface IoAltHtml {
  engine: 'html' | 'pug'
  ext: 'html' | 'php'
}

export default class AltHtml extends BaseQuestions implements IoQuestions {
  #engine: IoAltHtml['engine'] = 'html'
  #ext: IoAltHtml['ext'] = 'html'

  /** HTML template engine */
  public engine(): IoAltHtml['engine'] {
    return this.#engine
  }

  /** Build file extension */
  public ext(): IoAltHtml['ext'] {
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
          { name: 'None (Vanilla HTML)', value: 'html' },
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
  #buildExt = async (html: IoAltHtml['engine']): Promise<void> => {
    if (html === 'html') return

    const res: IoAltHtml | number = await inquirer
      .prompt<IoAltHtml>({
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
