<template>
  <div class="container">
    <section class="forms">
      <div class="formItem formItem-icon">
        <span :class="['iconfont', 'icon-email', {'error': $v.regist.email.$error}]">
          <input
            @input="checkemail"
            @blur="checkexist"
            v-model="regist.email"
            type="text"
            :placeholder="$t('邮箱地址')">
          <i v-show="regist.email" @click="cleardata('email')"/>
        </span>
        <em class="errortip">{{ $t(emailtip) }}</em>
      </div>
      <div class="formItem formItem-icon">
        <span :class="['iconfont', 'icon-pwd', {'error': $v.regist.pwd.$error}]">
          <input @input="checkpwd" v-model="regist.pwd" type="password" :placeholder="$t('密码')">
          <i v-show="regist.pwd" @click="cleardata('pwd')"/>
        </span>
        <em class="errortip">{{ $t(pwdtip) }}</em>
      </div>
      <div class="formItem formItem-icon">
        <span :class="['iconfont', 'icon-pwd', {'error': $v.regist.pwdconfirm.$error}]">
          <input @input="checkpwdconfirm" v-model="regist.pwdconfirm" type="password" :placeholder="$t('确认密码')">
          <i v-show="regist.pwdconfirm" @click="cleardata('pwdconfirm')"/>
        </span>
        <em class="errortip">{{ $t(pwdconfirmtip) }}</em>
      </div>
      <div class="formItem">
        <div class="formrow">
          <span :class="{'error': $v.regist.code.$error}">
            <input @input="checkcode" @keyup.enter="submit" v-model="regist.code" type="text" :placeholder="$t('邮箱验证码')">
            <i v-show="regist.code" @click="cleardata('code')"/>
          </span>
          <button :disabled="$v.regist.email.$invalid" v-if="!countdownflag" @click="send">
            {{ $t('发送验证码') }}
          </button>
          <button v-else disabled>
            <count-down
              @end="end"
              :expireTime="new Date().getTime()+1000*60 + 2000"
              format="s"
            />
          </button>
        </div>
        <em class="errortip">{{ $t(codetip) }}</em>
      </div>
      <div class="d-checkbox">
        <input id="agreed" type="checkbox" v-model="agreed">
        <i :class="['iconfont',agreed ? 'icon-checkbox' : 'icon-checkbox-blank']"></i>
        <a href="javascript:;"><label for="agreed">{{ $t('我已阅读并同意服务条款') }}</label></a>
      </div>
      <div class="btnsbox">
        <button :disabled="repeat || $v.$invalid || !agreed" @click="submit"><span v-if="!loadingflag">{{ $t('注册') }}</span><loading v-else/></button>
      </div>
      <div class="login">
        <router-link :to="{name: 'login'}">{{ $t('登录') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { required, minLength, maxLength, sameAs, reg } from '@/plugin/validate'
import regist from '@/api/basic/regist'
import checkexist from '@/api/basic/checkexist'
import _debounce from 'lodash/debounce'

export default {
  data () {
    return {
      regist: {
        email: '',
        pwd: '',
        pwdconfirm: '',
        code: ''
      },
      agreed: false,
      emailtip: '',
      pwdtip: '',
      pwdconfirmtip: '',
      codetip: '',
      repeat: false,
      loadingflag: false,
      countdownflag: false
    }
  },
  validations: {
    regist: {
      email: {
        required,
        reg: reg(/^[A-Za-zd0-9]+([-_.]+[A-Za-zd0-9]+)*@([A-Za-zd0-9]+[-.])+[A-Za-zd]{2,5}$/)
      },
      pwd: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(30)
      },
      pwdconfirm: {
        sameAs: sameAs('pwd')
      },
      code: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(6)
      }
    }
  },
  methods: {
    checkemail: _debounce(function () {
      const email = this.$v.regist.email
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
      const pwd = this.$v.regist.pwd
      pwd.$touch()
      if (this.regist.pwdconfirm) this.checkpwdconfirm()
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
    checkpwdconfirm: _debounce(function () {
      const pwdconfirm = this.$v.regist.pwdconfirm
      pwdconfirm.$touch()
      if (!pwdconfirm.sameAs) {
        this.pwdconfirmtip = '两次输入的密码不一致'
      } else {
        this.pwdconfirmtip = ''
      }
    }, 300),
    checkcode: _debounce(function () {
      const code = this.$v.regist.code
      code.$touch()
      if (!code.required) {
        this.codetip = '必填项'
      } else if (!code.minLength || !code.maxLength) {
        this.codetip = '长度为6位数' //  must have at least 6 letters
      } else {
        this.codetip = ''
      }
    }, 300),
    checkexist () {
      if (!this.$v.regist.email.$invalid) {
        checkexist({
          email: this.regist.email
        }).then(({data}) => {
          if (data.code === 1) {
            this.$msg(data.msg, 'error')
            this.emailtip = data.msg
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    send () {
      this.countdownflag = true
    },
    end () {
      this.countdownflag = false
    },
    submit () {
      if (this.repeat) return
      this.loadingflag = true
      this.repeat = true
      regist({
        email: this.regist.email,
        pwd: this.regist.pwd,
        code: this.regist.code
      }).then(({ data }) => {
        if (!data.error) {
          this.loadingflag = false
          this.repeat = false
          this.$msg(data.msg, 'success')
          setTimeout(() => {
            this.$router.push({name: 'login'})
          }, 300)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    cleardata (val) {
      this.regist[val] = ''
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
}
</style>
