<template>
  <div class="container">
    <div class="d-searchBox">
      <input
        @keydown.down="selectResultItem"
        @keydown.enter="goSearch(currentIndex)"
        @blur="searchResultBoxShow = false"
        @focus="searchResultBoxShow = true"
        @input="inputHandle"
        type="text"
        placeholder="search"
        v-model="searchValue"
        ref="search"
      >
      <ul
        v-show="searchResultBoxShow || isMouseOnSerchBox"
        @mouseenter="isMouseOnSerchBox = true"
        @mouseleave="isMouseOnSerchBox = false"
        class="searchResult"
      >
        <li
          v-if="!loading"
          :class="[currentIndex === i ? 'active' : '']"
          v-for="(item, i) of person"
          @click="goSearch(i)"
          :key="i"
        >
          <span>{{ item.name }}</span>
          <span>{{ item.honor }}</span>
        </li>
        <li
          style="text-align: center;line-height: 60px;"
          v-if="loading"
        >数据加载中...</li>
        <li
          v-if="!this.person.length && !loading"
          style="text-align: center;line-height: 60px;"
        >no Data</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      searchResultBoxShow: false,
      isMouseOnSerchBox: false,
      searchValue: '',
      currentIndex: -1,
      person: [],
      loading: false,
      personData: [
        {
          'id': '001',
          'age': '45',
          'name': '晁盖',
          'honor': '托塔天王'
        },
        {
          'id': '002',
          'age': '44',
          'name': '宋江',
          'honor': '及时雨'
        },
        {
          'id': '003',
          'age': '44',
          'name': '吴用',
          'honor': '智多星'
        },
        {
          'id': '004',
          'age': '44',
          'name': '卢俊义',
          'honor': '玉麒麟'
        }
      ]
    }
  },
  methods: {
    goSearch (i) {
      const item = this.person[i]
      console.log('got the' + item + 'and yon can do something')
      this.$refs.search.blur()
      this.currentIndex = i
      this.searchResultBoxShow = this.isMouseOnSerchBox = false
      this.person = []
      this.searchValue = ''
    },
    selectResultItem () {
      if (this.currentIndex === this.person.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
    },
    inputHandle () { // 此处应该做节流
      this.searchResultBoxShow = true
      this.loading = true
      setTimeout(() => {
        this.person = this.personData
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variate";
  .container {
    width: 100%;
    .d-searchBox {
      margin-left: 20px;
      margin-top: 20px;
      display: inline-block;
      position: relative;
      input {
        height: 26px;
        border-radius: 4px;
        font-size: 14px;
      }
      .searchResult {
        border-radius: 6px;
        position: absolute;
        top: 36px;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 6px 0 $themecolor;
        width: 100%;
        li {
          border-bottom: 1px solid #ddd;
          padding: 4px 10px;
          font-size: 14px;
          color: $themecolor;
          &.active {
            background-color: rgba($themecolor, 0.1);
          }
        }
      }
    }
  }
</style>
