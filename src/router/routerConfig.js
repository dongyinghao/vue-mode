export default {
  routes: [
    {
      path: '*',
      name: 'notfound',
      meta: {
        title: '404 Not Found'
      },
      component: () => import(/* webpackChunkName: 'notfount' */ '@/components/error/404')
    },
    {
      path: '/',
      name: 'index',
      meta: {
        title: 'index'
      },
      component: () => import(/* webpackChunkName: 'index' */ '@/components/basic/index')
    },
    {
      path: '/news',
      name: 'news',
      meta: {
        title: 'news'
      },
      component: () => import(/* webpackChunkName: 'newsnews' */ '@/components/news/news.vue')
    },
    {
      path: '/login.html',
      name: 'login',
      meta: {
        title: 'login'
      },
      component: () => import(/* webpackChunkName: 'basic' */ '@/components/basic/login')
    },
    {
      path: '/register.html',
      name: 'register',
      meta: {
        title: 'register'
      },
      component: () => import(/* webpackChunkName: 'basic' */ '@/components/basic/register')
    },
    {
      path: '/trade.html',
      name: 'trade',
      meta: {
        title: 'register',
        auth: true
      },
      component: () => import(/* webpackChunkName: 'basic' */ '@/components/trade/trade')
    },
    {
      path: '/aboutUs.html',
      name: 'aboutUs',
      meta: {
        title: '关于我们',
        auth: false
      },
      component: () => import(/* webpackChunkName: 'basic' */ '@/components/basic/aboutUs')
    },
    {
      path: '/usercenter/',
      meta: {
        auth: false
      },
      component: () => import(/* webpackChunkName: 'usercenter' */ '@/components/userCenter/usercenter'),
      children: [
        {
          path: '',
          name: 'info',
          component: () => import(/* webpackChunkName: 'usercenter' */ '@/components/userCenter/center-info')
        },
        {
          path: 'info.html',
          name: 'infoTrue',
          component: () => import(/* webpackChunkName: 'usercenter' */ '@/components/userCenter/center-info')
        },
        {
          path: 'setting.html',
          name: 'setting',
          component: () => import(/* webpackChunkName: 'usercenter' */ '@/components/userCenter/center-setting')
        },
        {
          path: 'security.html',
          name: 'security',
          component: () => import(/* webpackChunkName: 'usercenter' */ '@/components/userCenter/center-security')
        },
        {
          path: 'verification.html',
          name: 'verification',
          component: () => import(/* webpackChunkName: 'usercenter' */ '@/components/userCenter/center-verification')
        },
        {
          path: 'chart.html',
          name: 'chart',
          component: () => import(/* webpackChunkName: 'usercenter' */ '@/components/userCenter/center-chart')
        }
      ]
    }
  ]
}
