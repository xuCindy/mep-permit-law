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
  import Right from '../../../components/right/right'

  export default {
    data() {
      return {
        crumbs: ['统计分析', '实施检查统计', '流域']
      }
    },
    components: {
      Right
    }
  }
</script>

<style lang="scss" scoped>
</style>
