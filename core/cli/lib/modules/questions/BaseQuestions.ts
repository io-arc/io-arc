import { bold, red } from 'kleur'

/** task library name (@io-arc/xxx) */
export type TLibraryName = string | null

export interface IoQuestions {
  questions(): Promise<void>
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
