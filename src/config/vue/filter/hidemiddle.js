// params
// value: timestamp
// num: 前后保留的明文数量，中间文字以*代替
function getstrs (n) {
  let str = ''
  for (let i = 0; i < n; i++) {
    str += '*'
  }
  return str
}
export default (v, num) => {
  if (!v) return ''
  if (num > Math.floor(v.length / 2)) {
    return v
  }
  const reg = '^(.{' + num + '})(.*)(.{' + num + '})$'
  const patt = new RegExp(reg)
  const pattArr = v.match(patt)
  return pattArr[1] + getstrs(pattArr[2].length) + pattArr[3]
}
