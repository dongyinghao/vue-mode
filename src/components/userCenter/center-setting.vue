<template>
  <div class="c-setting">
    <h3>{{ $t('圆环进度条') }}</h3>
    <div style="width: 160px;height: 160px;margin: 200px auto;">
      <d-progerss-loop :percentNum="percentNum" speed="5"></d-progerss-loop>
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
