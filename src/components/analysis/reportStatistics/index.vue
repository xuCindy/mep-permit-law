<template>
  <section>
    <Right :crumbs="crumbs">
      <ul class="nav" slot="nav">
        <li v-for="(list,index) in crumbs" :key="index">
          {{list}}
        </li>
      </ul>
      <div class="" slot="slt">ccccccc</div>
      <div class="" slot="form">ccccccc</div>
    </Right>
  </section>
</template>

<script type="text/ecmascript-6">
  import Right from '../../../components/right/right'

  export default {
    data() {
      return {
        crumbs: ['统计分析', '实施检查统计', '地区']
      }
    },
    components: {
      Right
    }
  }
</script>

<style lang="scss" scoped>
</style>
