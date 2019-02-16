<template>
  <div id="app" @click="clickRoot" style="font-size: 16px;">
    <header-nav/>
    <div class="main">
      <transition :name="side">
        <router-view class="animate"/>
      </transition>
    </div>
    <footer-nav/>
    <div v-if="loadflag" class="loading">
      <loading :area="30"/>
    </div>
  </div>
</template>

<script>
import _debounce from 'lodash/debounce'

export default {
  data () {
    return {
      side: 'right',
      loadflag: false
    }
  },
  methods: {
    init () {
      this.recalc()
      let resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize'
      window.addEventListener(resizeEvt, _debounce(this.recalc, 100), false)
    },
    clickRoot () {
      this.$store.dispatch('clickRootNumAction', 1)
    },
    recalc () {
      let html = document.documentElement
      let clientWidth = html.clientWidth
      if (!clientWidth) return
      if (clientWidth >= 1920) {
        html.style.fontSize = '100px'
      } else {
        html.style.fontSize = 100 * (clientWidth / 1920) + 'px'
      }
    }
  },
  watch: {
    '$route': function (to, from) {
      const historypage = this.$store.state.cache.historypage
      this.$store.commit('sethistorypage', from.name)
      this.side = to.name === historypage ? 'left' : 'right'
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped lang="scss">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .loading {
    text-align: center;
    padding-top: 30%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }
  .site-header, .site-footer {
    flex: none;
  }
  .main {
    overflow: hidden;
    background-color: #f1f1f1;
    flex: 1 0 auto;
    display: flex;
  }
  .animate {
    transition: transform .3s linear;
  }
  .right-leave-active, .left-leave-active { // 离开中
    display: none;
  }
  .right-enter{ // 右边进入前
    transform: translate(50%, 0)
  }
  .left-enter{ // 左边进入前
    transform: translate(-50%, 0)
  }
}
</style>
