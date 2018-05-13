<template>
  <div class="content">
    <div class="panel-left">
      <Left title="实施档案库">
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
        crumbs: ['实施档案库', '实施档案', '企业实施档案'],
        menuList: [
          {
            name: '实施档案',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                url: '',
                content: '企业实施档案',
                path: ''
              },
              {
                url: '',
                content: '提报企业导出',
                path: ''
              }
            ],
            show: true
          },
          {
            name: '空间分析',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
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
