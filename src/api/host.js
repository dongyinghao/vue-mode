const apis = {
  local: '/api/',
  dev: 'http://10.45.4.176:8081/',
  prod: 'http://10.45.4.176:8081/'
}

export default {
  api: apis[process.env.API_HOST]
}
