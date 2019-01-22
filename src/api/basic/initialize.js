import $http from '@/plugin/axios/http'

export default () => {
  return $http({
    type: 'get',
    url: 'api/basic/initialize'
  })
}
