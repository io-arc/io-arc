import Vue from 'vue'
import HtmlCssBabel from './components/HtmlCssBabel'
import HtmlScssBabel from './components/HtmlScssBabel'
import HtmlSassBabel from './components/HtmlSassBabel'
import HtmlStylusBabel from './components/HtmlStylusBabel'
import PugStylusBabel from './components/PugStylusBabel'

Vue.component('html-css-babel', HtmlCssBabel)
Vue.component('html-scss-babel', HtmlScssBabel)
Vue.component('html-sass-babel', HtmlSassBabel)
Vue.component('html-stylus-babel', HtmlStylusBabel)
Vue.component('pug-stylus-babel', PugStylusBabel)

const apps = new Vue()
apps.$mount('#apps')
