<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'
  export default {
    components: {
      MHeader,
      MFooter
    }
  }
</script>

<style lang="scss" scoped>
</style>
