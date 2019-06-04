<template>
  <div class="chart">
    <ul>
      <li
        v-for="(item) of list"
        :key="item.name"
        :style="{'transform': 'translateY(' + item.index * 36 + 'px)'}"
      >
        <div class="name">{{ item.name }}</div>
        <div class="bar">
          <i :style="{'width': item.gdp + '%','backgroundColor': item.bg}"><em>{{ item.gdp }}</em></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      viewData: this.data
    }
  },
  computed: {
    list () {
      const list = JSON.parse(JSON.stringify(this.viewData))
      list.sort((x, y) => {
        return y.gdp - x.gdp
      })
      list.forEach((item, i) => {
        this.viewData.forEach((it, idx) => {
          if (item.name === it.name) {
            this.$set(this.viewData, idx, {...this.viewData[idx], 'index': i})
          }
        })
      })
      return this.viewData
    }
  },
  watch: {
    'data': function (val) {
      this.viewData = val
    }
  }
}
</script>

<style scoped lang="scss">
  h3 {
    background-color: #f1f1f1;
    padding-bottom: 16px;
  }
  .chart {
    ul {
      position: relative;
      li {
        display: block;
        width: 530px;
        margin-top: 10px;
        overflow: hidden;
        padding-right: 30px;
        position: absolute;
        transition: all 0.5s linear;
        top: 0;
        left: 0;
        div {
          float: left;
          &.name {
            width: 90px;
            margin-right: 10px;
            text-align: right;
          }
          &.bar {
            position: relative;
            width: 400px;
            i {
              display: inline-block;
              height: 14px;
              line-height: 14px;
              background-color: #1a7a63;
              position: relative;
              transition: all 1s linear;
              em {
                position: absolute;
                right: -30px;
                top: 0;
                height: 14px;
                line-height: 14px;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
</style>
