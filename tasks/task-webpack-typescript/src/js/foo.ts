import $ from 'jquery'
import Junk from './modules/junk'
import logo from '../img/arc-one-logo.png'
import flag from '../img/io-arc-flag.webp'
import _ from 'lodash'

const j = new Junk()
console.log(j.all())

const abc = _.forEach([1, 2, 3])
console.log(abc)

const a = $('#aaa')
console.log(a)
console.log(logo)
console.log(flag)
console.log(SITE_TITLE)
console.log(IS_PRODUCTION)
