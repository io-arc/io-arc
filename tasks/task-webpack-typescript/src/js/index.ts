import $ from 'jquery'
import allList from './graphql/foo.gql'

declare const CONFIG: { api: string }
console.log(CONFIG.api)

const a = $('#abc')
console.log(a)

console.log(allList)
