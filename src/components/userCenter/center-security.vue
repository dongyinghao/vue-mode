<template>
  <div class="c-security">
    <h3>{{ $t('安全中心') }}</h3>
    <div>
      <d-upload></d-upload>
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
