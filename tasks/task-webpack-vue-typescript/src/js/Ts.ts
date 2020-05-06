import Vue from 'vue'
import PugStylusTs from './components/PugStylusTs.vue'

Vue.component('pug-stylus-ts', PugStylusTs)

const apps = new Vue()
apps.$mount('#apps')
