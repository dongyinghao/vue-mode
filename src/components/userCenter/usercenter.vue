<template>
  <div class="container">
    <aside>
      <h3>{{ $t('用户管理') }}</h3>
      <ul>
        <li
          :class="{'active': currenttitle === key}"
          v-for="(it, key) in titlelist"
          :key="key"
          @click="currenttitle = key"
        ><router-link :to="{name: key}">{{ $t(it) | cap }}</router-link></li>
      </ul>
    </aside>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titlelist: {
        infoTrue: '用户信息',
        setting: '圆环进度条',
        security: '上传图片',
        verification: '搜索框',
        chart: '条形图'
      },
      currenttitle: 'infoTrue'
    }
  },
  methods: {
    switchtitle (tit) {
      this.currenttitle = tit
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variate";
  .container {
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 20px 0;
    flex: 1 0 auto;
    display: flex;
    aside {
      flex: none;
      background-color: #fff;
      width: 240px;
      h3 {
        padding-bottom: 16px;
        background-color: #f1f1f1;
      }
      ul {
        padding: 10px 16px;
        li {
          line-height: 40px;
          border-bottom: 1px solid #999;
          cursor: pointer;
          a {
            color: #666;
            display: inline-block;
            width: 100%;
            font-size: 14px;
          }
          &:hover a {
            color: $themecolor;
          }
          &.active a{
            color: $themecolor;
            font-size: 16px;
          }
          &:active a{
            transform: translateY(1px);
          }
        }
      }
    }
    section {
      background-color: #fff;
      margin-left: 20px;
      flex: 1 0 auto;
      h3 {
        background-color: #f1f1f1;
        padding-bottom: 16px;
      }
    }
  }
</style>
