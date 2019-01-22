<template>
  <div class="c-info">
    <h3>{{ $t('用户信息') }}</h3>
    <div>
      <div class="head">
        <div></div>
        <span>{{ $t('上传头像') }}</span>
      </div>
      <ul>
        <li><span>{{ $t('昵称') }}：</span><span>{{ $store.state.account.userInfo.nickName }}</span></li>
        <li><span>{{ $t('邮箱') }}：</span><span>{{ $store.state.account.userInfo.email }}</span></li>
        <li><span>{{ $t('上次登录时间') }}：</span><span>{{ $store.state.account.lasttime | utc('YYYY/MM/DD hh:mm:ss') }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variate";
.c-info {
  h3 {
    background-color: #f1f1f1;
    padding-bottom: 16px;
  }
  &>div {
    padding: 260px 20px 20px;
    position: relative;
    .head {
      border: 1px solid $gray-2;
      position: absolute;
      left: 40px;
      top: 20px;
      text-align: center;
      &>div {
        height: 180px;
        width: 150px;
        background-color: $themehover;
      }
      span {
        cursor: pointer;
        padding: 6px 0;
        display: inline-block;
        &:hover {
          color: $themehover;
        }
      }
    }
    ul li {
      margin-top: 20px;
      font-size: 16px;
      span {
        color: #666;
        &:first-child {
          display: inline-block;
          width: 140px;
          color: #999;
        }
      }
    }
  }
}

</style>
