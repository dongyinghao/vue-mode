// 将科学计数法转换成普通数字形式的字符串

export default (val) => {
  const e = String(val)
  let rex = /^([0-9])\.?([0-9]*)e-([0-9])/
  if (!rex.test(e)) return val
  const numArr = e.match(rex)
  const n = Number('' + numArr[1] + (numArr[2] || ''))
  const num = '0.' + String(Math.pow(10, Number(numArr[3]) - 1)).substr(1) + n
  return num.replace(/0*$/, '') // 防止可能出现0.0001540000000的情况
}
