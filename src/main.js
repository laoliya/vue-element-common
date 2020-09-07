import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mCommon from './components/common';
Vue.config.productionTip = false
Vue.use(mCommon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
