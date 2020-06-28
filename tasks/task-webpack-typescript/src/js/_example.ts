// import _ from 'lodash'

import yaml from '../data/a.yml'
import b from '../data/b.json'

import Worker from './worker/inc.worker'
import Junk from './modules/junk'

class Calc {
  #num: number

  constructor(num: number) {
    this.#num = num
  }

  public plus(): void {
    this.#num += 1
  }

  public minus(): void {
    this.#num -= 1
  }

  public result(): number {
    return this.#num
  }
}

const base = new Calc(1)
base.plus()
console.log(base.result())
base.minus()
console.log(base.minus())

// const abc = _.forEach([1, 2, 3])
// console.log(abc)

console.log(yaml)
console.log(b)

// Web worker
const worker = new Worker()
worker.postMessage({ a: 1 })
worker.onmessage = (event: Event): void => {
  console.log(event)
}
worker.addEventListener('message', (event: Event): void => {
  console.log(event)
})

const ch = new Junk()
console.log(ch.all())
