import Vue from 'vue'
import './scss/base.scss'

import AppComponent from './Components/App.vue'

const vm = new Vue({
  el: '#app',
  components: {
    app: AppComponent,
  },
  render: h => h('app'),
})
