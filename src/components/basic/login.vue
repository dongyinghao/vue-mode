<template>
  <div class="container">
    <section class="forms">
      <div class="formItem formItem-icon">
        <span :class="['iconfont', 'icon-email', {'error': $v.login.email.$error}]">
          <input @input="checkemail" v-model="login.email" type="text" :placeholder="$t('邮箱地址')">
          <i v-show="login.email" @click="cleardata('email')"/>
        </span>
        <em class="errortip">{{ $t(emailtip) }}</em>
      </div>
      <div class="formItem formItem-icon">
        <span :class="['iconfont', 'icon-pwd', {'error': $v.login.pwd.$error}]">
          <input @input="checkpwd" @keyup.enter="submit" v-model="login.pwd" type="password" :placeholder="$t('密码')">
          <i v-show="login.pwd" @click="cleardata('pwd')"/>
        </span>
        <em class="errortip">{{ $t(pwdtip) }}</em>
      </div>
      <div class="btnsbox">
        <button :disabled="repeat || $v.$invalid" @click="submit"><span v-if="!loadingflag">{{ $t('登录') }}</span><loading v-else/></button>
      </div>
      <div class="register">
        <router-link :to="{name: 'register'}">{{ $t('注册') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import _debounce from 'lodash/debounce'
import { required, minLength, maxLength, reg } from '@/plugin/validate'
export default {
  data () {
    return {
      login: {
        email: '',
        pwd: ''
      },
      emailtip: '',
      pwdtip: '',
      repeat: false,
      loadingflag: false
    }
  },
  validations: {
    login: {
      email: {
        required,
        reg: reg(/^[A-Za-zd0-9]+([-_.]+[A-Za-zd0-9]+)*@([A-Za-zd0-9]+[-.])+[A-Za-zd]{2,5}$/)
      },
      pwd: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(30)
      }
    }
  },
  methods: {
    checkemail: _debounce(function () {
      const email = this.$v.login.email
      email.$touch()
      if (!email.required) {
        this.emailtip = '必填项'
      } else if (!email.reg) {
        this.emailtip = '请输入正确的邮箱格式'
      } else {
        this.emailtip = ''
      }
    }, 300),
    checkpwd: _debounce(function () {
      const pwd = this.$v.login.pwd
      pwd.$touch()
      if (!pwd.required) {
        this.pwdtip = '必填项'
      } else if (!pwd.minLength) {
        this.pwdtip = '密码长度必须大于6位数'
      } else if (!pwd.maxLength) {
        this.pwdtip = '密码长度必须小于30位数'
      } else {
        this.pwdtip = ''
      }
    }, 300),
    submit () {
      if (this.repeat) return
      this.loadingflag = true
      this.repeat = true
      this.$store.dispatch('login', {
        email: this.login.email,
        pwd: this.login.pwd
      })
        .then(({ data }) => {
          this.loadingflag = false
          this.repeat = false
          if (!data.err) {
            if (data.code === 0) {
              this.$msg(data.msg, 'success')
              this.$store.commit('setlogged', true)
              this.$store.commit('setUserInfo', data.data)
              this.$router.push({name: this.$route.query.redirect || 'info'})
            } else {
              this.$msg(data.msg, 'error')
            }
          }
        })
        .catch((error) => {
          console.log(error)
          this.loadingflag = false
          this.repeat = false
        })
    },
    cleardata (val) {
      this.login[val] = ''
      this['check' + val]()
    }
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
  .btnsbox {
    span {
      margin-right: 12px;
    }
  }
  .register {
    margin-top: 20px;
    a {
      color: #21a185;
    }
  }
}
</style>
