<template>
  <div class="content">
    <div class="panel-left">
      <Left title="业务办理">
        <Menu :menuList="menuList"></Menu>
      </Left>
    </div>
    <div class="panel-right">
      <Right :crumbs="crumbs">
        <ul class="nav">
          <li v-for="(list,index) in crumbs" :key="index">
            {{list}}
          </li>
        </ul>
      </Right>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Left from 'components/left/left'
  import Right from 'components/right/right'
  import Menu from 'components/menu/menu'

  export default {
    data() {
      return {
        crumbs: ['统计分析', '实施检查统计', '地区'],
        menuList: [
          {
            name: '监督管理',
            list: [
              {
                url: '',
                content: '许可执行情况',
                path: ''
              },
              {
                url: '',
                content: '监督检查情况',
                path: ''
              },
              {
                url: '',
                content: '无证排污统计',
                path: ''
              },
              {
                url: '',
                content: '企业改正规定',
                path: ''
              }
            ],
            show: true
          },
          {
            name: '业务撤回',
            list: [
              {
                url: '',
                content: '撤回',
                path: ''
              }
            ],
            show: false
          }
        ]
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
  @import "../../common/css/variable";
  @import "../../common/css/element";

  .content {
    @include layout(row);
    position: absolute;
    top: 80px;
    bottom: 30px;
    width: 100%;
    overflow: hidden;
    .panel-left {
      margin-right: $space;
      flex: 0 0 200px;
      width: 200px;
      height: 100%;
      background: $color-theme;
      @include left;
    }
    .panel-right {
      flex: 1;
      @include right;
      width: calc(100% - 210px);
      .nav {
        display: inline-block;
        font-size: 0;
        > li {
          display: inline-block;
          font-size: $font-size-small;
          > a {
            display: block;
            padding: 0 $space;
          }
          &:last-child {
            > a {
              font-size: $font-size-medium;
              color: $color-text;
            }
          }
        }
      }
    }
  }
</style>
