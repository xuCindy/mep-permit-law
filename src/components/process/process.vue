<template>
  <div class="content">
    <div class="panel-left">
      <Left title="业务办理">
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
            name: '监督管理',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                url: '',
                content: '许可执行情况',
                path: ''
              },
              {
                url: '',
                content: '监督检查情况',
                path: ''
              },
              {
                url: '',
                content: '无证排污统计',
                path: ''
              },
              {
                url: '',
                content: '企业改正规定',
                path: ''
              }
            ],
            show: true
          },
          {
            name: '业务撤回',
            src: 'http://47.94.22.148:8091/static/images/leftico02.png',
            list: [
              {
                url: '',
                content: '撤回',
                path: ''
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
