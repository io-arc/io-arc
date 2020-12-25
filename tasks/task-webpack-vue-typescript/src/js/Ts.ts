import Vue from 'vue'
import PugStylusTs from './components/PugStylusTs.vue'

Vue.component('pug-stylus-ts', PugStylusTs)
console.log('aaa')

const apps = new Vue()
apps.$mount('#apps')
