<template>
  <div class="container">
    <div class="banner"><img src="../../../static/imgs/banner.jpg" alt=""></div>
    <div class="marketlist">
      <header>
        <ul class="hover-link">
          <li
            :class="{'active': currentmarket === it}"
            v-for="it in markets"
            @click="switchmarket(it)"
            :key="it"
          ><span>{{ it }}</span></li>
          <li><span class="d-search"><input v-model="search" type="text" placeholder="搜索"></span></li>
        </ul>
      </header>
      <d-table :items = list :fields="fields" @rowClick = rowClick>
        <template slot="pair" slot-scope="{data}">
          <span :style=" data.index === 3 ? testcss : ''">{{ data.value.s0 + '/' + data.value.s1 }}</span>
        </template>
        <template slot="change" slot-scope="{data}">
          <span :style=" data.index === 3 ? testcss : ''">{{ data.value }} %</span>
        </template>
        <template slot="price_H" slot-scope="{data}">
          <span style="color: red;">{{ data.field.label }}</span>
        </template>
      </d-table>
    </div>
  </div>
</template>

<script>
import initialize from '../../api/basic/initialize'
import _filter from 'lodash/filter'

export default {
  data () {
    return {
      testcss: { 'color': 'red', 'font-size': '18px', 'font-weight': 'bold' },
      items: [],
      isshow: true,
      currentsort: 'price',
      sortrole: 1,
      search: '',
      currentmarket: 'EOS',
      markets: ['EOS', 'BTC', 'ETH', 'USDT'],
      fields: {
        pair: {
          label: '交易对'
        },
        price: {
          label: '最新价',
          sort: true
        },
        heigh: {
          label: '24H最高',
          sort: true
        },
        change: {
          label: '24H涨跌',
          sort: true
        },
        trade: {
          label: '成交量',
          sort: true
        },
        low: {
          label: '24H最低',
          sort: false
        }
      }
    }
  },
  computed: {
    keys () {
      return Object.keys(this.fields)
    },
    list () {
      const arr = this.items
      return _filter(arr, it => {
        return it.pair.s1 === this.currentmarket && it.pair.s0.indexOf(this.search.toUpperCase()) > -1
      })
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getmarketdata()
    },
    getmarketdata () {
      initialize().then(({data}) => {
        this.items = data.data
      }).catch((err) => {
        console.log(err)
      })
    },
    switchmarket (val) {
      this.currentmarket = val
    },
    rowClick (i, item) {
      console.log(i)
      console.log(item)
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    .banner {
      img {
        width: 100%;
      }
    }
    .marketlist {
      padding: 20px;
      header {
        margin-bottom: 20px;
        ul {
          li {
            display: inline-block;
            margin-right: 20px;
            cursor: pointer;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
