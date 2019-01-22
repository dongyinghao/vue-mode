<template>
  <div class="d-table">
    <ul class="listheader">
      <li v-for="(it, key) in fields" :key="key">
        <span
          :class="{'up': sortField === key && sortrole > 0,'down': sortField === key && sortrole < 0}"
          v-if="it.sort"
          class='sort'
          @click.capture="switchSort(key)"
        ><slot :name="key + '_H'" :data="{field: it, colum: key}">{{ it.label }}</slot></span>
        <span v-else><slot :name="key + '_H'" :data="{field: it, colum: key}">{{ it.label }}</slot></span>
      </li>
    </ul>
    <div class="listbody">
      <!--<template-->
        <div v-for="(it, i) in list" @click="rowClick(i, it)" :key="i">
          <ul>
            <li v-for="n in keys.length" :key="n">
              <slot :name="keys[n-1]" :data="unitedata(i, it, n)">{{ it[keys[n-1]] }}</slot>
            </li>
          </ul>
        </div>
        <!--<div v-if="!it.detailShowing" :key="i + 'y'" style="background-color: red;">-->
          <!--<slot name="row-details" :data="uniteDetail(i, it)">fsa</slot>-->
        <!--</div>-->
      <!--</template>-->
    </div>
  </div>
</template>

<script>
// 待实现：详情框
export default {
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    fields: {
      type: Object,
      default: () => ({})
    },
    sortBy: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      sortrole: 1,
      sortField: this.sortBy,
      detailshowIndex: -1
    }
  },
  computed: {
    keys () {
      return Object.keys(this.fields)
    },
    list () {
      const arr = this.items
      if (this.sortField) {
        if (isNaN(this.items[0][this.sortField].charAt(0))) {
          arr.sort((x, y) => { // 当x[this.sortField]为对象时，未做判断处理
            return this.sortrole * x[this.sortField].localeCompare(y[this.sortField])
          })
        } else {
          arr.sort((x, y) => {
            return this.sortrole * (x[this.sortField] - y[this.sortField])
          })
        }
      }
      const len = arr.length
      for (let i = 0; i < len; i++) {
        arr[i].detailShowing = false
      }
      return arr
    }
  },
  mounted () {
  },
  methods: {
    rowClick (i, it) {
      this.$emit('rowClick', i, it)
    },
    unitedata (index, item, n) { // params: 当前行数，当前行的数据包(Object), 当前行的列数
      let obj = { index, item }
      obj.field = this.fields[this.keys[n - 1]]
      obj.value = item[this.keys[n - 1]]
      return obj
    },
    switchSort (key) {
      let ele = event.target
      while (ele.parentNode.tagName !== 'LI') {
        ele = ele.parentNode
      }
      if (ele.classList.value.indexOf('up') > -1) {
        this.sortrole = -1
      } else {
        this.sortrole = 1
      }
      this.sortField = key
    }
  }
}
</script>

<style scoped lang="scss">
.d-table {
  background-color: #fff;
  padding: 10px 0;
  .listheader {
    border-bottom: 1px solid #b7b7b7;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    &>li {
      font-weight: bold;
      width: 16.5%;
      overflow: hidden;
      padding: 10px 0;
      span.sort {
        cursor: pointer;
        position: relative;
        &:before, &:after {
          position: absolute;
          right: -16px;
          content: '';
          display: inline-block;
          border-right: 6px solid transparent;
          border-left: 6px solid transparent;
        }
        &:before {
          border-top: 6px solid #ababab;
          top: 12px;
        }
        &:after {
          border-bottom: 6px solid #ababab;
          top: 5px;
        }
        &.down {
          &:before {
            border-top: 6px solid #21a185;
          }
        }
        &.up {
          &:after {
            border-bottom: 6px solid #21a185;
          }
        }
      }
    }
  }
  .listbody {
    &>div {
      &:hover {
        background-color: #f0f0f0;
      }
      &:first-child {
        margin-top: 0;
      }
      ul {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        li {
          width: 16.5%;
          overflow: hidden;
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
