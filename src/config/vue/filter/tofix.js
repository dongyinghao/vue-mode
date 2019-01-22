// params
// val: 要处理的数据，Number | String
// len: 保留小数位数，位数不足时，以0填充
// side: 1|-1 对应 入|舍
export default (val, len, side) => {
  const numval = Number(val)
  if (isNaN(numval)) return 0
  const str = val.toString()
  if (str.indexOf('.') > -1) {
    let numArr = str.split('.')
    if (numArr[1].length > len) {
      let tempnum = numval * Math.pow(10, len)
      if (!side) {
        return Number(val).toFixed(len)
      } else if (side === 1) {
        if (tempnum < 1) return (1 / Math.pow(10, len))
        return (Math.ceil(tempnum) / Math.pow(10, len)).toFixed(len)
      } else if (side === -1) {
        return (Math.floor(tempnum) / Math.pow(10, len)).toFixed(len)
      } else {
        return Number(val.toFixed(len))
      }
    } else {
      return Number(str).toFixed(len)
    }
  } else {
    return Number(val).toFixed(len)
  }
}
