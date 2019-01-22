<template>
  <div class="d-combo" @mouseover="langflag = true" @mouseout="langflag = false">
    <span>{{ $t(lang[currentlang]) }}</span>
    <ul v-show="langflag">
      <li @click="changelang(key)" v-for="(it, key) in lang" :key="key"><span>{{ $t(it) }}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lang: {
        'en': '英文',
        'zh': '中文'
      },
      currentlang: 'zh',
      langflag: false
    }
  },
  methods: {
    switchdata (key) {
      this.currentdata = this.datalist[key]
      this.isshow = false
    },
    changelang (lang) {
      this.currentlang = lang
      this.langflag = false
      this.$store.commit('setlang', lang)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
