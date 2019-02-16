<template>
  <div class="c-setting">
    <h3>{{ $t('设置') }}</h3>
    <div style="width: 60px;height: 60px;margin: 200px auto;">
      <progerss-loop :percentNum="percentNum"></progerss-loop>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percentNum: 80
    }
  }
}
</script>
<style>
  .number{font-size: 12px;}
</style>
<style scoped lang="scss">
  h3 {
    background-color: #f1f1f1;
    padding-bottom: 16px;
  }
</style>
