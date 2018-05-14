<template>
  <div class="content">
    <div class="panel-left">
      <Left title="实施档案库">
        <Menu :menuList="menuList"></Menu>
      </Left>
    </div>
    <div class="panel-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
        menuList: [
          {
            name: '实施档案',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                content: '企业实施档案',
                path: '/archives/report-all'
              },
              {
                content: '提报企业导出',
                path: '/archives/report-excel'
              }
            ],
            show: true
          },
          {
            name: '空间分析',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                content: '污染源空间分析',
                path: '/archives/space-source'
              },
              {
                content: '排放量空间分析',
                path: '/archives/space-discharge'
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
