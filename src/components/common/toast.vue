<template>
  <transition name="fade">
    <div v-show="flag" class="d-toast" :class="'toast-' + currenttype">
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
      timeout: 1000,
      type: 'info',
      defaultType: ['info', 'error', 'warn', 'success'],
      flag: true
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
    setTimeout(() => {
      this.flag = false
    }, this.timeout)
  }
}
</script>

<style scoped lang="scss">
.d-toast {
  transition: all .3s linear;
  background-color: #fff;
  position: fixed;
  top: 80px;
  padding: 10px;
  text-align: center;
  width: 90%;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 6px;
  font-size: 16px;
  &.toast-info {background-color: rgba(#5bc0de, 0.7);}
  &.toast-success {background-color: rgba(#5cb85c, 0.7);}
  &.toast-warn {background-color: rgba(#f0ad4e, 0.7);}
  &.toast-error {background-color: rgba(#d9534f, 0.7);}
  i {
    margin-right: 8px;
    font-size: 22px;
    line-height: 20px;
    vertical-align: -2px;
    &.icon-info {color: #bbb7c2;}
    &.icon-success {color: #09b568;}
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
.fade-enter{
  transform: translateY(-100px);
}
.fade-leave-to {
  opacity: 0;
}
</style>
