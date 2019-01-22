import Vue from 'vue'
import toast from '@/components/common/toast'

const Toast = Vue.extend(toast)
function init (option, type) {
  if (typeof option === 'string' && typeof type === 'string') {
    option = {
      msg: option,
      type: type
    }
  }
  if (typeof option === 'string' && typeof type === 'undefined') {
    option = {
      msg: option
    }
  }
  const instance = new Toast({
    data: option
  }).$mount()
  const ele = document.querySelector('.d-toast')
  if (ele) document.body.removeChild(ele)
  document.body.appendChild(instance.$el)
}

Vue.prototype.$msg = init
