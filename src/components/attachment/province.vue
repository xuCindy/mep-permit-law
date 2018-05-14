<template>
  <div>
    <Right>
      <ul class="nav" :crumbs="crumbs">
        <li v-for="(list,index) in crumbs" :key="index">
          {{list}}
        </li>
      </ul>
    </Right>
  </div>
</template>

<script type="text/ecmascript-6">
  import Left from 'components/left/left'
  import Right from 'components/right/right'
  import Menu from 'components/menu/menu'

  export default {
    data() {
      return {
        crumbs: ['资料附件', '资料附件', '地方资料附件']
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
