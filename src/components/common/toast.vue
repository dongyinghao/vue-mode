<template>
  <transition name="fade">
    <div v-show="flag" class="d-toast" ref="d_toast" :class="'toast-' + currenttype">
      <i :class="['iconfont', 'icon-' + currenttype]"></i><span>{{ msg }}</span><em @click="colse"></em>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      msg: '',
      autocolse: true,
      hasclose: true,
      timeout: 2000,
      type: 'info',
      defaultType: ['info', 'error', 'warn', 'success'],
      flag: false
    }
  },
  methods: {
    colse () {
      this.flag = false
    }
  },
  computed: {
    currenttype () {
      return this.defaultType.indexOf(this.type) > -1 ? this.type : 'info'
    }
  },
  mounted () {
    this.flag = true
    let timeId = setTimeout(() => {
      this.flag = false
    }, this.timeout)

    this.$refs.d_toast.onmouseenter = () => {
      clearTimeout(timeId)
    }

    this.$refs.d_toast.onmouseleave = () => {
      timeId = setTimeout(() => {
        this.flag = false
      }, this.timeout)
    }
  }
}
</script>

<style scoped lang="scss">
.d-toast {
  background-color: #fff;
  position: fixed;
  transition: all .3s;
  top: 80px;
  padding: 10px;
  text-align: center;
  width: 90%;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 6px;
  font-size: 16px;
  &.toast-info {background-color: rgba(#5bc0de, 0.8);}
  &.toast-success {background-color: rgba(#20a98d, 0.8);}
  &.toast-warn {background-color: rgba(#f0ad4e, 0.8);}
  &.toast-error {background-color: rgba(#d9534f, 0.8);color: #fff;}
  i {
    margin-right: 8px;
    font-size: 22px;
    line-height: 20px;
    vertical-align: -2px;
    &.icon-info {color: #bbb7c2;}
    &.icon-success {color: #1a7a63;}
    &.icon-warn {color: #fcbf4a;}
    &.icon-error {color: #f00;}
  }
  em {
    display: inline-block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    margin-right: 20px;
    margin-top: 1px;
    float: right;
    position: relative;
    cursor: pointer;
    &::after, &::before {
      content: '';
      width: 12px;
      height: 1px;
      background-color: #333;
      display: inline-block;
      position: absolute;
      top: 9px;
      right: 3px;
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg);
    }
  }
}
.fade-enter, .fade-leave-to{
  transform: translateY(-100px);
  opacity: 0;
}
</style>
