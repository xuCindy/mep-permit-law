<template>
  <section>
    <div class="crumbs-nav" :crumbs="crumbs">
      <span class="address">位置：</span>
      <slot name="nav"></slot>
    </div>
    <div class="select-option">
      <slot name="slt"></slot>
    </div>
    <div class="form-list">
      <slot name="form"></slot>
    </div>
  </section>
</template>

<script type='text/ecmascript-6'>
  export default {
    props: {
      crumbs: {
        type: Array,
        default: null
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../common/css/variable';
  @import '../../common/css/element';

  .crumbs-nav {
    position: relative;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    font-size: 0;
    .address {
      display: inline-block;
      padding-left: 15px;
      font-size: $font-size-small;
      font-weight: bold;
      color: $color-span;
      line-height: 44px;
      vertical-align: top;
      background: url("./ico_address.png") no-repeat left center;
    }
  }
  .select-option,.form-list {
    margin-right: $space;
    background: $color-theme;
  }
  .select-option {
    margin-bottom: $space;
    padding: 15px $space;
  }
  .form-list {
    padding: $space;
  }
</style>
