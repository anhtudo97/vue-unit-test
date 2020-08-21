import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { store } from './store'

Vue.use(Vuex)
const storage = new Vuex.Store(store)

Vue.config.productionTip = false


new Vue({
  store: storage,
  render: h => h(App),
}).$mount('#app')
