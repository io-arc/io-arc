import inquirer from 'inquirer'
import { grey } from 'kleur'
import BaseQuestions, { IoQuestions } from './BaseQuestions'
import { IoProjectSetting } from './ProjectSetting'

export interface IoSiteSetting {
  title: string
  url: string
  siteRoot: string
  author: string
}

export default class SiteSetting extends BaseQuestions implements IoQuestions {
  #title = ''
  #url = ''
  #siteRoot = '/'
  #author = ''

  constructor(author: IoProjectSetting['author']) {
    super()
    this.#author = author
  }

  /** Site title */
  public title(): IoSiteSetting['title'] {
    return this.#title
  }

  /** Site URL */
  public url(): IoSiteSetting['url'] {
    return this.#url
  }

  /** Site root directory */
  public siteRoot(): IoSiteSetting['siteRoot'] {
    return this.#siteRoot
  }

  /** Site author */
  public author(): IoSiteSetting['author'] {
    return this.#author
  }

  /** Site questions */
  async questions(): Promise<void> {
    this.startLog('Site settings')

    const res: IoSiteSetting | number = await inquirer
      .prompt<IoSiteSetting>([
        {
          type: 'input',
          name: 'title',
          message: 'Site title'
        },
        {
          type: 'input',
          name: 'url',
          message: `Release Site URL`,
          suffix: `\n${grey(`No final slash required\ne.g. https://foo.com`)}`,
          validate: (input: string): boolean => !/\/$/.test(input)
        },
        {
          type: 'input',
          name: 'siteRoot',
          message: 'Site root directory',
          suffix: `\n${grey(`Always add a slash at the end`)}`,
          default: this.#siteRoot
        },
        {
          type: 'input',
          name: 'author',
          message: 'Site author',
          default: this.#author
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

    this.#title = res.title
    this.#url = res.url
    this.#siteRoot = res.siteRoot
    this.#author = res.author
  }
}
