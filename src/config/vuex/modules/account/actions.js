import login from '@/api/basic/login'
export default {
  login (content, args) {
    return login(args)
  }
}
