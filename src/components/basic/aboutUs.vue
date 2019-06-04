<template>
  <div class="page-absoutUs">
    <div class="aside">
      <ul>
        <li v-for="item of asideNav" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      asideNav: ['圆环进度条', '上传图片', '搜索框'],
      deleteIndex: -1,
      percentNum: 62,
      files: []
    }
  },
  methods: {
    update () {
      this.$refs.file.click()
    },
    deleteHandle (i) {
      this.files.splice(i, 1)
    },
    getFile (e) {
      const fullName = this.$refs.file.files[0].name
      const extName = fullName.substring(fullName.lastIndexOf('.') + 1)
      const name = fullName.substr(0, fullName.lastIndexOf('.'))
      const files = e.target.files[0]
      console.log('开始上传')
      const reader = new FileReader()
      reader.readAsDataURL(files)
      reader.onloadend = (evt) => {
        console.log('上传成功')
        this.url = evt.target.result
        const url = evt.target.result
        let obj = { extName, name, url, fullName }
        this.files.push(obj)
      }
    },
    animationFinished () {
      console.log('动画完成')
    }
  }
}
</script>

<style scoped lang="scss">
  .page-absoutUs {
    min-width: 1200px;
    width: 85%;
    margin: 20px auto;
    .aside {
      width: 300px;
      height: 100%;
      border: 1px solid #1a7a63;
      ul {
        li {
          padding: 10px;
          border-top: 1px solid #1a7a63;
          &:first-child {
            border-top: 0;
          }
        }
      }
    }
    .upload {
      padding: 10px;
      button {
        width: 120px;
        height: 36px;
        line-height: 36px;
        border-radius: 6px;
      }
      .fileList {
        width: 360px;
        li {
          list-style: none;
          display: block;
          border: 1px solid #1a7a63;
          margin-top: 10px;
          padding: 10px;
          position: relative;
          img {
            width: 120px;
            height: 120px;
            float: left;
          }
          span {
            line-height: 120px;
            margin-left: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .success {
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 0;
            border-top: 32px solid #1a7a63;
            border-left: 32px solid transparent;
            &:before {
              content: '';
              display: block;
              width: 12px;
              height: 6px;
              border-left: 1px solid #fff;
              border-bottom: 1px solid #fff;
              margin: 12px auto 0;
              transform: rotate(-45deg);
              position: absolute;
              top: -40px;
              right: 2px;
            }
          }
          .delete {
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 30px;
            cursor: pointer;
            &:active {
              transform: translateY(2px);
            }
            &:before, &:after {
              content: '';
              display: block;
              width: 20px;
              height: 1px;
              background: #000;
              margin: 12px auto 0;
              transform: rotate(45deg);
            }
            &:after {
              margin: 0 auto 0;
              transform: rotate(135deg);
            }
          }
        }
      }
    }
  }
</style>
