import axios from './axios-interceptors'
import host from '@/api/host'
import _merge from 'lodash/merge'

export default (option, datas) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  const data = _merge({
    langkey: window.vm.$store.state.cache.lang
  }, datas)

  return axios({
    method: option.type || 'post',
    url: host.local + option.url,
    timeout: 2000,
    data,
    transformRequest: [data => Object.keys(data).map(d => `${d}=${data[d]}`).join('&')],
    headers
  })
}
