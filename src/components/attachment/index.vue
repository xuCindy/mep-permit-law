<template>
  <div class="content">
    <div class="panel-left">
      <Left title="资料附件" :menuList="menuList"></Left>
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
            name: '资料附件',
            src: 'http://47.94.22.148:8091/static/images/leftico08.png',
            list: [
              {
                content: '国家级资料附件',
                path: '/attachment/country'
              },
              {
                content: '地方资料附件',
                path: '/attachment/province'
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
