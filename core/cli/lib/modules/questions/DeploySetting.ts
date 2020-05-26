import inquirer from 'inquirer'
import BaseQuestions, { IoQuestions } from './BaseQuestions'
import { grey } from 'kleur'

interface IoDeployQuestions {
  css: string
  js: string
  img: string
  json: string
}

export interface IoDeploySetting {
  css: string[]
  js: string[]
  img: string[]
  json: string[]
}

export default class DeploySetting extends BaseQuestions
  implements IoQuestions {
  #css: IoDeploySetting['css'] = ['common', 'css']
  #js: IoDeploySetting['js'] = ['common', 'js']
  #img: IoDeploySetting['img'] = ['common', 'img']
  #json: IoDeploySetting['json'] = ['common', 'json']

  async questions(): Promise<void> {
    this.startLog('Deploy settings')

    const res: IoDeployQuestions | number = await inquirer
      .prompt<IoDeployQuestions>([
        {
          type: 'input',
          name: 'css',
          message: 'CSS files output directory',
          default: this.#css.join('/')
        },
        {
          type: 'input',
          name: 'js',
          message: 'JavaScript files output directory',
          default: this.#js.join('/')
        },
        {
          type: 'input',
          name: 'img',
          message: 'Image files output directory',
          default: this.#img.join('/')
        },
        {
          type: 'input',
          name: 'json',
          message: 'YAML to JSON convert files output directory',
          suffix: `\n ${grey('* use @io-arc/task-yaml2json')}`,
          default: this.#json.join('/')
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

    // remove empty for array element
    this.#css = res.css.split('/').filter(Boolean)
    this.#js = res.js.split('/').filter(Boolean)
    this.#img = res.img.split('/').filter(Boolean)
    this.#json = res.json.split('/').filter(Boolean)
  }
}
