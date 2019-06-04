export default function (to, from, next, store) {
  if (to.matched[0].meta.auth && !store.state.account.logged) {
    if (window.vm) {
      store._vm.$msg(window.vm.$t('请登录后查看'), 'warning')
    }
    next({path: '/login.html', query: {redirect: to.name}})
    return
  }
  if (store.state.account.logged) {
    if (to.name === 'login' || to.name === 'register') {
      return
    }
  }
  next()
}
