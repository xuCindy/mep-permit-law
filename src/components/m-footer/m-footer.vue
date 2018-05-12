<template>
    <footer class="footer">
      <p class="copyright">版权所有 2017 东华软件</p>
    </footer>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="scss" scoped>
  @import "../../common/css/variable";
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #98a4a9;
    background: #f0f9fd;
    border-top: solid 1px #c2d2d7;
    .copyright{
      padding-right: 30px;
      font-size: $font-size-small;
      color: #98a4a9;
      text-align: right;
    }
  }
</style>
