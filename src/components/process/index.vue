<template>
  <div class="content">
    <div class="panel-left">
      <Left title="业务办理">
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
        crumbs: ['统计分析', '实施检查统计', '地区'],
        menuList: [
          {
            name: '监督管理',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                content: '许可执行情况',
                path: '/process/report-info'
              },
              {
                content: '监督检查情况',
                path: '/process/law-info'
              },
              {
                content: '无证排污统计',
                path: '/process/no-permit'
              },
              {
                content: '企业改正规定',
                path: '/process/correct'
              }
            ],
            show: true
          },
          {
            name: '业务撤回',
            src: 'http://47.94.22.148:8091/static/images/leftico02.png',
            list: [
              {
                content: '撤回',
                path: '/process/back'
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
