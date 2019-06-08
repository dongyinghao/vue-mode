<template>
  <div v-if="showFlag" class="pageLoading">
    <loading area="30"/>
    <p>{{ tip }}</p>
  </div>
</template>

<script>
export default {
  props: {
    showFlag: {
      type: Boolean,
      default: false
    },
    tip: {
      type: String,
      default: '数据加载中,请稍候'
    }
  }
}
</script>

<style scoped>
  .pageLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: rgba(0,0,0,.6);
  }
  .pageLoading p {
    color: #fff;
    font-size: 16px;
    margin-top: 40px;
  }
</style>
