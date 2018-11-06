import React from 'react'
import { render } from 'react-dom'
import Vue from 'vue'
import ShareComponent from './shareComponent'
import ReactApp from './ReactApp'
import VueApp from './VueApp.vue'
import './index.less'

window.customElements.define('share-component', ShareComponent)

render(<ReactApp />, document.querySelector('#reactApp'))

Vue.config.ignoreElements = ['share-component']

new Vue({
  render: h => h(VueApp),
}).$mount('#vueApp')
