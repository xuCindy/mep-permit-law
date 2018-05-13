<template>
  <header class="header">
    <div class="logo">
      <img src="../../common/images/logo.png" width="290" height="80">
    </div>
    <div class="nav">
      <router-link tag="div" class="tab-item" to="/process">
        <span class="tab-link"><img src="./ico_01.png">业务办理</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/archives">
        <span class="tab-link"><img src="./ico_02.png">实施档案库</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/analysis">
        <span class="tab-link"><img src="./ico_03.png">统计分析</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/attachment">
        <span class="tab-link"><img src="./ico_04.png">资料附件</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/system">
        <span class="tab-link"><img src="./ico_05.png">系统维护</span>
      </router-link>
    </div>
    <div class="user-center">
      <span class="user">
      </span>
      <span class="quit">
      </span>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="scss" scoped>
  @import "../../common/css/variable";
  @import "../../common/css/element";

  .header {
    @include layout(row);
    position: fixed;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding: 0 10px 0 20px;
    overflow: hidden;
    background: url("../../common/images/header.gif") no-repeat right top;
    background-size: cover;
    z-index: 100;
    .logo {
      flex: 0 0 290px;
      margin-right: 70px;
      width: 290px;
      @include left;
      img {
        width: 100%;
      }
    }
    .nav {
      flex: 1;
      font-size: 0;
      @include left;
      .tab-item {
        display: inline-block;
        margin: 0 15px;
        line-height: 80px;
        cursor: pointer;
        .tab-link {
          display: block;
          padding: 0 3px;
          color: $color-theme;
          font-size: $font-size-medium;
          img {
            display: inline-block;
            margin-right: 5px;
            vertical-align: middle;
          }
        }
        &.router-link-active {
          .tab-link {
            background: url("./navbg.png") no-repeat left top;
            background-size: 100% 100%;
          }
        }
      }
    }
    .user-center {
      flex: 0 0 160px;
      width: 160px;
      height: 80px;
      background: #1167a3;
      border-left: 1px solid #0e588b;
      border-right: 1px solid #0e588b;
      @include flex(row);
      @include right;
      .user, .quit {
        flex: 1
      }
      .user {
        border-right: 1px solid #0e588b;
      }
    }
  }
</style>
