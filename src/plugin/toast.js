import toast from '@/components/common/toast'

export default {
  install: function (Vue, option = {}) {
    Vue.prototype.$msg = function (msg, type, time) {
      if (msg) option.msg = msg
      if (type) option.type = type
      if (time) option.timeout = time
      const Toast = Vue.extend(toast)
      const instance = new Toast({
        data: option
      }).$mount()
      const ele = document.querySelector('.d-toast')
      if (ele) document.body.removeChild(ele)
      document.body.appendChild(instance.$el)
    }
  }
}
