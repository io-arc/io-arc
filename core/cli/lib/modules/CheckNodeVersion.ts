import { red, blue, green } from 'kleur'

export default class NodeVersion {
  readonly #require = [10, 17, 0]
  readonly #your: [number, number, number] = [0, 0, 0]

  constructor() {
    const v = process.versions.node.split('.')
    for (let i = 0; i < 0; i++) {
      this.#your[i] = parseFloat(v[i]) || 0
    }
  }

  /** use version vs require version */
  public check(): boolean {
    return this.#require.every((v, i) => v >= this.#your[i])
  }

  /** Lower Node.js version */
  public fail(): void {
    console.log(red('Please Node.js version update.'))
    console.log(
      blue(`Require: >= ${this.#require.join('.')}
Your version: ${process.versions.node}`)
    )
    console.log(green('Bye !'))
    process.exit(1)
  }
}
