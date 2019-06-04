<template>
  <div class="c-info">
    <h3>{{ $t('用户信息') }}</h3>
    <div>
      <div class="head">
        <div>
          <img v-if="url" :src="url" alt="">
          <em v-else class="iconfont icon-user"></em>
        </div>
        <div class="update">
          <input ref="upload" type="file" @change="getPortraitUrl">
          <span>{{ $t('上传头像') }}</span>
        </div>
      </div>
      <ul>
        <li><span>{{ $t('昵称') }}：</span><span>{{ $store.state.account.userInfo && $store.state.account.userInfo.nickName }}</span></li>
        <li><span>{{ $t('邮箱') }}：</span><span>{{ $store.state.account.userInfo && $store.state.account.userInfo.email }}</span></li>
        <li><span>{{ $t('上次登录时间') }}：</span><span>{{ $store.state.account.userInfo && $store.state.account.lasttime | utc('YYYY/MM/DD hh:mm:ss') }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import updatePortrait from '@/api/usercenter/updatePortrait'
import axios from 'axios'
export default {
  data () {
    return {
      url: ''
    }
  },
  methods: {
    getPortraitUrl () {
      const data = new FormData()
      const ele = this.$refs.upload
      data.append('file', ele.files[0])
      data.append('langKey ', 'ZH_CN')
      data.append('operatorId ', this.$store.state.account.userInfo.userId)
      data.append('operator ', this.$store.state.account.userInfo.email)
      axios.post(
        'http://localhost:3001/api/api/usercenter/updatePortrait',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: function (res) {
            console.log(res)
          }
        }
      ).then(({ data }) => {
        this.url = data.url
      }).catch(err => {
        console.log(err)
      })
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
  &>div{
    padding: 260px 20px 20px;
    position: relative;
    .head {
      border: 1px solid $themecolor;
      position: absolute;
      left: 40px;
      top: 20px;
      text-align: center;
      box-shadow: 0 0 8px 1px #999;
      &>div:first-child  {
        height: 150px;
        width: 150px;
        text-align: center;
        border-bottom: 1px solid $themecolor;
        img {
          width: 100%;
          height: 100%;
        }
        em {
          font-size: 80px;
          color: #999;
          line-height: 150px;
        }
      }
      div.update {
        position: relative;
        width: 150px;
        height: 32px;
        text-align: center;
        span {
          line-height: 32px;
          cursor: pointer;
        }
        input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          &:hover ~ span {
            color: $themehover;
          }
        }
        form {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          z-index: 1;
          input {
            width: 100%;
            height: 100%;
            opacity: 0;
          }
          &:hover ~ span {
            color: $themehover;
          }
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
