import { green } from 'kleur'

export interface IoQuestions {
  questions(): void
}

export default class BaseQuestions {
  protected fail(): void {
    console.log(green('Bye !'))
    process.exit(1)
  }
}
