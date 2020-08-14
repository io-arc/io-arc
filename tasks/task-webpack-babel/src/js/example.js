import $ from 'jquery'
import yaml from '../data/a.yml'
import b from '../data/b.json'
import logo from '../img/arc-one-logo.png'
import Worker from './worker/inc.worker'
// import _ from 'lodash'
//
// const abc = _.forEach([1, 2, 3])
// console.log(abc)

console.log(yaml)
console.log(b)
console.log(logo)

const worker = new Worker()
worker.postMessage({ a: 1 })
worker.onmessage = (event) => {}

worker.addEventListener('message', (event) => {})

const a = 0
console.log(SITE_TITLE)

const data = $('#abc')
console.log(data)
