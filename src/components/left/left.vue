<template>
  <section class="panel">
    <h4>{{title}}</h4>
    <slot></slot>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/css/variable";
  @import "../../common/css/element";

  .panel {
    > h4 {
      position: relative;
      height: 40px;
      line-height: 40px;
      font-size: $font-size-medium;
      text-align: left;
      padding-left: 54px;
      background: #e7f0f7 url("leftico.png") no-repeat 26px center;
      @include border-bottom(20px);
    }
  }

</style>
