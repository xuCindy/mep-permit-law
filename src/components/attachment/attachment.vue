<template>
  <div class="content">
    <div class="panel-left">
      <Left title="资料附件">
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
        crumbs: ['资料附件', '资料附件', '国家级资料附件'],
        menuList: [
          {
            name: '资料附件',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                url: '',
                content: '国家级资料附件',
                path: ''
              },
              {
                url: '',
                content: '地方资料附件',
                path: ''
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
