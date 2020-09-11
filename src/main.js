require('./plugins')

import Vue from 'vue'
import DefaultTemplate from './layouts/DefaultTemplate'
import router from './routes'
import store from './vuex/'

/**
 * Global Components
 */
Vue.component('preloader-component', () => import('./components/Preloader'))

new Vue({
  render: h => h(DefaultTemplate),
  router,
  store
}).$mount('#app')