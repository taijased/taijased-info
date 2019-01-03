import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import VModal from 'vue-js-modal'
import i18n from './i18n'
Vue.use(VModal)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
