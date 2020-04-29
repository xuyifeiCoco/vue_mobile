import Vue from 'vue'
import App from '@/app/App.vue'
import 'amfe-flexible/index.js'
import globalFun from '@/globalFun/index'
import VsConsole from 'vconsole'
import commenComponent from '@/common_components/index'
import { router } from '@/router'
import store from '@/store/index'
import '@/util/vant.js'
Vue.use(commenComponent) // 注册全局组件
Vue.use(globalFun) //注册全局方法

if (process.env.NODE_ENV == 'development') {
  var vConsole = new VsConsole({});
  vConsole.setOption('maxLogNumber', 5000);
}

Vue.config.productionTip = false

window.$router = router

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});

