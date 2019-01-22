import Vue from 'vue'
import cap from './capitalize'
import tofix from './tofix'
import utc from './utc'
import toD from './toD'
import hm from './hidemiddle'

const filterList = {
  cap,
  tofix,
  toD,
  hm,
  utc
}

for (let v in filterList) {
  Vue.filter(v, filterList[v])
}
