import $http from '@/plugin/axios/http'

export default (data) => {
  return $http({
    url: 'api/usercenter/updatePortrait'
  }, data)
}
