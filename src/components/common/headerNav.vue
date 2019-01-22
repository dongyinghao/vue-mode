<template>
  <div class="site-header">
    <div class="logo"><img src="@/assets/icons/logo.png" alt=""></div>
    <nav class="title">
      <ul>
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
          <a href="#">{{ $t('关于我们') | cap }}</a>
        </li>
      </ul>
    </nav>
    <div class="aboutlogin">
      <ul>
        <li v-if="!$store.state.account.logged">
          <router-link :to="{name: 'login'}">{{ $t('登录') | cap }}</router-link>
        </li>
        <li v-if="!$store.state.account.logged">
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
  methods: {
    logout () {
      this.$store.commit('setlogged', false)
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variate";
.site-header{
  height: 72px;
  position: relative;
  border-bottom: 1px solid $themecolor;
  background-color: #fff;
  .logo{
    position: absolute;
    left: 10px;
    height: 52px;
    margin: auto;
    top: 0;
    bottom: 0;}
  .aboutlogin{
    position: absolute;
    right: 10px;
    top: 0;
    height: 100%;
    li{
      display: inline-block;
      line-height: 72px;
      padding: 0 10px;
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
    }
  }
  .title {
    text-align: center;
    li {
      display: inline-block;
      line-height: 72px;
      padding: 0 10px;
      &:hover a{
        background-color: $themecolor;
        color: #fff;
      }
      a{
        color: $themecolor;
        font-size: 18px;
        padding: 2px 10px;
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
</style>
