<template>
  <div class="container">
    <p @click="isshow = !isshow">{{ new Date().getTime() | utc('YYYY-MM-DD hh:mm:ss') }}</p>
    <h3>i18n用法小节</h3>
    <pre>
      语言包如下：
      "你好": "hello"
      "你好{name}": "hello {name}"
      "{num}位小数": "没有小数|{num} decimal | {num} decimals"
      "tos": "Term of Service",
      "term": "I accept xxx{0}",
    </pre>
    <p><span>1、普通用法：“$t('你好')”</span> => <span>{{ $t('你好') }}</span></p>
    <p><span>2、使用变量：“$t('你好{name}'，{name：'大爷'})”</span> => <span>{{ $t('你好{name}',{name:'老大爷'}) }}</span></p>
    <p><span>3、单复数形式：“$tc('{num}位小数'，num, {num：4})”</span> => <span>{{ $tc('{num}位小数', 0, {num:1}) }}</span></p>
    <p><span>4、DOM占位符：</span></p>
    <pre>
        &lt;i18n path="term" tag="p" id="week"&gt;
          &lt;span&gt;{{ $t('tos') }}&lt;/span&gt;
        &lt;/i18n&gt;
      </pre>
    <pre>得到：&lt;p id="week"&gt;I accept xxx&lt;span &gt;Term of Service&lt;/span&gt;&lt;/p&gt;</pre>
    <br>
    <br>
    <i18n path="term" tag="p" id="week">
      <span >{{ $t('tos') }}</span>
    </i18n>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted () {
  },
  watch: {
  }
}
</script>
