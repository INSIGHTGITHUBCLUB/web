import Vue from 'vue'
import {createPinia, PiniaVuePlugin} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import App from './App.vue'
import './app.css'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
pinia.use(piniaPluginPersist);

new Vue({
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
