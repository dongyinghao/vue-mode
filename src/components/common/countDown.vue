<template>
  <i v-if="format.length === 1">
    {{ timeformat.secondO }}
  </i>
  <i v-else>
    {{ timeformat.minute + s + timeformat.second }}
  </i>
</template>

<script>
export default {
  props: {
    format: { // 时间格式
      default: ':s', // 可传参数(s|:s)
      type: String
    },
    expireTime: { // 到期时间,时间戳,单位为毫秒
      default: new Date().getTime(),
      type: Number
    },
    amendTime: { // 修正时间，单位为毫秒，负数说明服务器时间大于本地时间，否则小于本地时间
      default: 0,
      type: Number
    }
  },
  data () {
    return {
      surplusTime: 0,
      timeId: null,
      s: this.format.charAt(0)
    }
  },
  computed: {
    timeformat () {
      let time = this.surplusTime / 1000
      const day = this.fillzero(parseInt(time / 60 / 60 / 24))
      const hour = this.fillzero(parseInt((time - day * 60 * 60 * 24) / 60 / 60))
      const minute = this.fillzero(parseInt((time - day * 60 * 60 * 24 - hour * 60 * 60) / 60))
      const second = this.fillzero(parseInt((time - day * 60 * 60 * 24 - hour * 60 * 60 - minute * 60)))
      const secondO = this.fillzero(parseInt(time))
      return { day, hour, minute, second, secondO }
    }
  },
  methods: {
    init () {
      const now = new Date().getTime()
      this.surplusTime = this.expireTime - (now - this.amendTime)
      this.countdown()
    },
    fillzero (num) {
      return Number(num) < 10 ? '0' + num : num
    },
    countdown () {
      this.timeId = setTimeout(() => {
        if (this.surplusTime > 1000) {
          this.surplusTime -= 1000
          this.countdown()
        } else {
          this.surplusTime = 0
          clearTimeout(this.timeId)
          this.$emit('end')
        }
      }, 1000)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
  i {font-size: 18px;}
</style>
