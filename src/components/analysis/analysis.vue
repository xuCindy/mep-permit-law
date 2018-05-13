<template>
  <div class="content">
    <div class="panel-left">
      <Left title="统计分析">
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
            name: '实施检查统计',
            src: '../src/common/images/leftico01.png',
            list: [
              {
                url: '',
                content: '地区',
                path: '',
                isHover: true
              },
              {
                url: '',
                content: '行业',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '流域',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '地区-行业',
                path: '',
                isHover: false
              }
            ],
            show: true
          },
          {
            name: '执行报告填写情况',
            src: '../../common/images/leftico02.png',
            list: [
              {
                url: '',
                content: '地区',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '行业',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '流域',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '地区-行业',
                path: '',
                isHover: false
              }
            ],
            show: false
          },
          {
            name: '实际排放量统计',
            src: '../src/common/images/leftico01.png',
            list: [
              {
                url: '',
                content: '地区',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '行业',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '流域',
                path: '',
                isHover: false
              },
              {
                url: '',
                content: '地区-行业',
                path: '',
                isHover: false
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
