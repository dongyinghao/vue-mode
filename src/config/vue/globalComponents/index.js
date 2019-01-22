import Vue from 'vue'

const components = {
  headerNav: () => import(/* webpackChunkName: "root" */ '@/components/common/headerNav'),
  footerNav: () => import(/* webpackChunkName: "root" */ '@/components/common/footerNav'),
  comboLang: () => import(/* webpackChunkName: "root" */ '@/components/common/combo-lang'), // 语言选择下拉
  loading: () => import(/* webpackChunkName: "root" */ '@/components/common/loading'), // 等待中
  countDown: () => import(/* webpackChunkName: "countdown" */ '@/components/common/countDown'), // 倒计时
  toast: () => import(/* webpackChunkName: "toast" */ '@/components/common/toast'), // 全局提示
  dTable: () => import(/* webpackChunkName: "table" */ '@/components/common/d-table') // 自定义表格
}

for (let key in components) {
  Vue.component(key, components[key])
}
