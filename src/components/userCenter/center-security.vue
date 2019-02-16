<template>
  <div class="c-security">
    <h3>{{ $t('安全中心') }}</h3>
    <div style="width: 100px;height: 100px;margin: 200px auto;">
      <progerss-loop :percentNum="percentNum"></progerss-loop>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percentNum: 20
    }
  }
}
</script>

<style scoped lang="scss">
  h3 {
    background-color: #f1f1f1;
    padding-bottom: 16px;
  }
</style>
