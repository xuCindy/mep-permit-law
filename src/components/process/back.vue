<template>
    <div>
      <Right :crumbs="crumbs">
        <ul class="nav">
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
        crumbs: ['业务办理', '业务撤回', '撤回']
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
