<template>
  <div class="content">
    <div class="panel-left">
      <Left title="系统维护" :menuList="menuList"></Left>
    </div>
    <div class="panel-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Left from 'components/left/left'

  export default {
    data() {
      return {
        menuList: [
          {
            name: '系统维护',
            src: 'http://47.94.22.148:8091/static/images/leftico09.png',
            list: [
              {
                content: '用户管理',
                path: '/system/user-info'
              },
              {
                content: '角色管理',
                path: '/system/role-info'
              }
            ],
            show: true
          }
        ]
      }
    },
    components: {
      Left
    }
  }
</script>

<style lang="scss" scoped>
</style>
