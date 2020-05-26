import { bold, red } from 'kleur'

export interface IoQuestions {
  questions(): void
}

export default class BaseQuestions {
  /**
   * Question start
   * @param msg
   */
  protected startLog(msg: string): void {
    console.log(bold().green(`# ${msg}`))
  }

  protected fail(): void {
    console.log(red('Oops X('))
    process.exit(1)
  }
}
