<template>
  <div class="content">
    <div class="panel-left">
      <Left title="系统维护">
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
            name: '系统维护',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                content: '用户管理',
                path: '/system/user-info'
              },
              {
                content: '角色管理',
                path: '/system/role'
              }
            ],
            show: true
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
