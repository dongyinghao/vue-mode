<template>
  <div class="container">
    <section class="forms">
      <h1>交易中心</h1>
    </section>
  </div>
</template>

<script>
// import _reduce from 'lodash/reduce'
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variate";
.container {
  max-width: 1200px;
  margin: 60px auto;
  background-color: #fff;
  padding: 140px 60px 0;
  flex: 1 0 auto;
  .forms {
    width: 400px;
    margin: 0 auto;
    .formItem {
      margin-bottom: 16px;
      height: 70px;
      span {
        border: 1px solid $themecolor;
        display: inline-block;
        height: 50px;
        width: 100%;
        position: relative;
        font-size: 30px;
        color: #8a8a8a;
        &.error {
          border: 1px solid $error;
        }
        &::before {
          position: absolute;
          height: 30px;
          left: 10px;
          top: 0;
          bottom: 0;
          margin: auto 0;
        }
        input {
          height: 100%;
          width: 100%;
          padding: 0 38px 0 48px;
          font-size: 18px;
          display: inherit;
          &:focus {
            background-color: #fff;
          }
        }
        i {
          display: inline-block;
          position: absolute;
          right: 8px;
          height: 20px;
          width: 20px;
          top: 0;
          bottom: 0;
          margin: auto 0;
          border: 1px solid #999;
          border-radius: 50%;
          cursor: pointer;
          &:before, &:after {
            content: '';
            position: absolute;
            right: 3px;
            top: 9px;
            height: 1px;
            width: 12px;
            background-color: #666;
            transform: rotate(45deg);
          }
          &:after {
            transform: rotate(-45deg);
          }
        }
      }
      .errortip {
        color: $error;
        font-size: 12px;
      }
    }
    .register {
      margin-top: 20px;
      a {
        font-size: 18px;
        color: $themecolor;
      }
    }
  }
  .btnsbox {
    span {
      margin-right: 12px;
    }
  }
}
</style>
