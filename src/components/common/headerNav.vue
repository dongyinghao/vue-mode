<template>
  <div class="site-header">
    <div class="logo"><img src="@/assets/icons/logo.png" alt=""></div>
    <nav class="title">
      <em class="iconfont icon-justify" @click.stop="toggle('title')"></em>
      <ul ref="title">
        <li :class="{'active': $route.name === 'index'}">
          <router-link :to="{name: 'index'}">{{ $t('首页') | cap }}</router-link>
        </li>
        <li :class="{'active': $route.name === 'exchange'}">
          <router-link :to="{name: 'trade'}">{{ $t('交易中心') | cap }}</router-link>
        </li>
        <li :class="{'active': $route.fullPath.indexOf('usercenter') > -1}">
          <router-link :to="{path: '/usercenter'}">{{ $t('用户中心') | cap }}</router-link>
        </li>
        <li>
          <router-link :to="{name: 'test'}">{{ $t('新闻') | cap }}</router-link>
        </li>
        <li>
          <router-link :to="{name: 'aboutUs'}">{{ $t('关于我们') | cap }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="aboutlogin">
      <em class="iconfont icon-user" @click.stop="toggle('aboutlogin')"></em>
      <ul ref="aboutlogin">
        <li :class="{'active': $route.name === 'login'}" v-if="!$store.state.account.logged">
          <router-link :to="{name: 'login'}">{{ $t('登录') | cap }}</router-link>
        </li>
        <li :class="{'active': $route.name === 'register'}" v-if="!$store.state.account.logged">
          <router-link :to="{name: 'register'}">{{ $t('注册') | cap }}</router-link>
        </li>
        <li v-if="$store.state.account.logged"><a href="javascript:;">{{ $t('欢迎') | cap }}</a>&nbsp;&nbsp;<span>{{ $store.state.account.userInfo.nickName }}</span></li>
        <li v-if="$store.state.account.logged">
          <a href="javascript:;" @click="logout">{{ $t('退出') | cap }}</a>
        </li>
        <li>
          <combo-lang/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    clickRootNum () {
      return this.$store.state.system.clickRootNum
    }
  },
  methods: {
    logout () {
      this.$store.commit('setlogged', false)
      this.$router.push({ name: 'login' })
    },
    toggle (ref) {
      if (ref === 'title') {
        this.$refs.aboutlogin.classList.remove('d-show')
      } else {
        this.$refs.title.classList.remove('d-show')
      }
      const ele = this.$refs[ref]
      const classname = ele.className
      if (classname.indexOf('d-show') > -1) {
        ele.classList.remove('d-show')
      } else {
        ele.classList.add('d-show')
      }
    }
  },
  watch: {
    'clickRootNum' () {
      this.$refs.title.classList.remove('d-show')
      this.$refs.aboutlogin.classList.remove('d-show')
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variate";
.d-show {display: block!important;}
@media screen and (min-width: 781px) {
  .site-header{
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid $themecolor;
    background-color: #fff;
    align-items: center;
    .logo{
      margin-left: 10px;
      height: 52px;
    }
    .aboutlogin{
      width: 250px;
      height: 100%;
      margin-right: 10px;
      .icon-user {
        display: none;
      }
      ul {
        display: flex!important;
        flex-direction: row;
        justify-content: space-around;
        li{
          display: inline-block;
          line-height: 72px;
          font-size: 14px;
          cursor: pointer;
          color: #7a7a7a;
          &:hover>a {
            color: $themecolor;
          }
          a {
            color: #7a7a7a;
            display: inline-block;
            &:active{
              transform: translateY(1px);
            }
          }
          &.active a{
            color: $themehover;
            font-weight: bold;
          }
        }
      }
    }
    .title {
      width: 600px;
      margin: 0 20px;
      .icon-justify {
        display: none;
      }
      ul {
        display: flex!important;
        flex-direction: row;
        justify-content: space-between;
        li {
          display: inline-block;
          line-height: 72px;
          &:hover a{
            background-color: $themecolor;
            padding: 2px 5px;
            color: #fff;
          }
          a{
            color: $themecolor;
            font-size: 18px;
            padding: 2px 5px;
            &:active {
              background-color: $themehover;
            }
          }
          &.active a{
            background-color: $themecolor;
            color: #fff;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 780px) {
  .site-header{
    height: 72px;
    border-bottom: 1px solid $themecolor;
    background-color: #fff;
    position: relative;
    .logo{
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      right: 10px;
      height: 52px;
    }
    .aboutlogin{
      width: 60px;
      height: 100%;
      margin-right: 10px;
      position: absolute;
      left: 60px;
      .icon-user {
        font-size: 32px;
        color: #999;
        line-height: 72px;
        display: inline-block;
        cursor: pointer;
      }
      ul {
        display: none;
        background-color: #fff;
        position: absolute;
        left: -10px;
        top: 71px;
        width: 90px;
        li{
          line-height: 36px;
          font-size: 14px;
          cursor: pointer;
          padding-left: 10px;
          color: #7a7a7a;
          &:hover>a {
            color: $themecolor;
          }
          a {
            color: #7a7a7a;
            display: inline-block;
            &:active{
              transform: translateY(1px);
            }
          }
        }
      }
    }
    .title {
      width: 60px;
      position: absolute;
      left: 10px;
      .icon-justify {
        font-size: 32px;
        line-height: 72px;
        display: inline-block;
        cursor: pointer;
      }
      ul {
        display: none;
        position: absolute;
        left: -10px;
        top: 71px;
        width: 120px;
        background-color: #fff;
        li {
          line-height: 36px;
          padding-left: 6px;
          &:hover a{
            background-color: $themecolor;
            color: #fff;
          }
          a{
            color: $themecolor;
            padding: 0 6px;
            font-size: 18px;
            &:active {
              background-color: $themehover;
            }
          }
          &.active a{
            background-color: $themecolor;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
