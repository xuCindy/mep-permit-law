<template>
  <div class="content">
    <div class="panel-left">
      <Left title="统计分析">
        <Menu :menuList="menuList"></Menu>
      </Left>
    </div>
    <div class="panel-right">
      <Right :crumbs="crumbs">
        <ul class="nav">
          <li v-for="(list,index) in crumbs" :key="index">
            {{list}}
          </li>
        </ul>
      </Right>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Left from 'components/left/left'
  import Right from 'components/right/right'
  import Menu from 'components/menu/menu'

  export default {
    data() {
      return {
        crumbs: ['统计分析', '实施检查统计', '地区'],
        menuList: [
          {
            name: '实施检查统计',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                url: '',
                content: '地区',
                path: '',
                isHover: true
              },
              {
                url: '',
                content: '行业',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '流域',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '地区-行业',
                path: '',
                isHover: false
              }
            ],
            show: true
          },
          {
            name: '执行报告填写情况',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                url: '',
                content: '地区',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '行业',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '流域',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '地区-行业',
                path: '',
                isHover: false
              }
            ],
            show: false
          },
          {
            name: '实际排放量统计',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                url: '',
                content: '地区',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '行业',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '流域',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '地区-行业',
                path: '',
                isHover: false
              }
            ],
            show: false
          }
        ]
      }
    },
    components: {
      Left,
      Right,
      Menu
    }
  }
</script>

<style lang="scss" scoped>
</style>
