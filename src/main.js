// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router, guard } from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'
import store from './config/vuex/store'
import './config/vue/globalComponents'
import './config/vue/filter'
import toast from './plugin/toast'

// 样式文件
import './assets/css/common.scss'
import './assets/iconfont/iconfont.css'

// test

Vue.use(vueAxios, axios)
Vue.use(VueI18n)
Vue.use(Vuelidate)
Vue.use(toast)
guard(store)

const i18n = new VueI18n({ // todo 待改进写法
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('../static/lang/zh.json'),
    'en': require('../static/lang/en.json')
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: { App },
  template: '<App/>'
})
