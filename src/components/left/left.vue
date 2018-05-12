<template>
  <section :class="[panelClass,cname]">
    <h4>{{title}}</h4>
    <slot></slot>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      cname: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        panelClass: 'panel'
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
      background: #e7f0f7;
      text-align: center;
      @include border-bottom(20px);
    }
    .menus {
      width: 100%;
      > li {
        width: 100%;
        border: 1px solid #ffffff;
        cursor: pointer;
        text-align: center;
        line-height: 40px;
        > ul {
          width: 100%;
          background: red;
          li {
            &:hover {
              background: #c31111;
            }
          }
        }
      }
      .active {
        background-color: #ff9800;
      }
    }
  }

</style>
