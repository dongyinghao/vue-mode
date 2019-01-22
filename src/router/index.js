import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './routerConfig'
import beforeEach from './beforeEach'
import afterEach from './afterEach'

Vue.use(VueRouter)

export const router = new VueRouter(routerConfig)

export const guard = store => {
  router.beforeEach(function (to, from, next) {
    beforeEach(to, from, next, store)
  })

  router.afterEach(function (to, from) {
    afterEach(to, from, store)
  })
}
