import loading from '@/components/common/pageLoading'

export default {
  install: function (Vue) {
    const Loading = Vue.extend(loading)
    const instance = new Loading().$mount()
    const obj = {
      show: function (tip) {
        instance.showFlag = true
        if (tip) instance.tip = tip
      },
      close: function () {
        instance.showFlag = false
      }
    }
    Vue.prototype.$loading = obj
    document.body.appendChild(instance.$el)
  }
}
