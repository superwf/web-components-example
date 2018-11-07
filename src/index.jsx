import React from 'react'
import { render } from 'react-dom'
import Vue from 'vue'
import ShareComponent from './shareComponent'
import ReactApp from './ReactApp'
import VueApp from './VueApp.vue'
import './index.less'
import readme from './readme.md'

global.customElements.define('share-component', ShareComponent)

render(<ReactApp />, document.querySelector('#reactApp'))

// must tell vue this element tag is already defined
Vue.config.ignoreElements = ['share-component']

new Vue({
  render: h => h(VueApp),
}).$mount('#vueApp')

document.querySelector('#readme').innerHTML = readme
