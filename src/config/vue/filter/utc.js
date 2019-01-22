import moment from 'moment'

// params
// value: timestamp
// format: YYYY-MM-DD hh:mm:ss
// see more http://momentjs.cn/

export default (value, format) => {
  return moment(value).format(format)
}
