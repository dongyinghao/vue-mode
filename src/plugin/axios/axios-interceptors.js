import axios from 'axios'

axios.interceptors.request.use(function (config) {
  if (config.loading) {
    window.vm.$loading.show()
  }
  return config // 此处返回config表示对请求参数不做任何修改，直接以该参数发送给服务来请求接口
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  window.vm.$loading.close()
  return response // 此处返回response表示对返回结果不做任何修改，直接返给then()来处理
}, function (error) {
  window.vm.$loading.close()
  if (error.response) {
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    // console.log(error.response.data)
    // console.log(error.response.status)
    // console.log(error.response.headers)
  } else {
    // 请求超时
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      console.log('请求超时')
    }
  }
  return Promise.reject(error) // reject将Promise对象的状态从“未完成”变为“失败”，在异步操作失败时调用，并将异步操作报出的错误作为参数传递出去。
})

export default axios
