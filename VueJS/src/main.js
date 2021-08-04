import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // VueScrollTo,
  render: h => h(App)
}).$mount('#app')
