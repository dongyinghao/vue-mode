import { between, maxLength, minLength, required, sameAs, minValue, maxValue } from 'vuelidate/lib/validators'

const reg = expression => value => { // 正则表达式
  return (expression).test(value)
}

export {
  reg,
  between,
  maxLength,
  minLength,
  required,
  sameAs,
  minValue,
  maxValue
}
