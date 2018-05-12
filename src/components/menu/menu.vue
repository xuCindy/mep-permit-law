<template>
  <div>
    <ul class="menus">
      <li @click="showFlag(index,item)" v-for="(item,index) in menuList" :key="index" class="menu-item">
        <span class="title" :class="[{active:item.show}]">{{item.name}}<img src="./iconrow.png"
                                                                            class="arr-down"/></span>
        <ul v-show="item.show" class="item-list">
          <li v-for="(list,index) in item.list" :key="index" v-on:click.stop="doThis(index)" class="list-content">
            <router-link :to="{ path: '/' }"><em></em>{{list.content}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      menuList: {
        type: Array,
        default: null
      }
    },
    methods: {
      showFlag: function (ind, item) {
        // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
        this.menuList.forEach(i => {
          // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么menuList[i]等于false
          if (i.show !== this.menuList[ind].show) {
            i.show = false
          }
        })
        // 取反(true或false)
        item.show = !item.show
        // console.log(item.name)
      },
      doThis: function (index) {
        // alert(index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/css/variable";
  @import "../../common/css/element";

  .menus {
    width: 100%;
    .menu-item {
      width: 100%;
      cursor: pointer;
      text-align: left;
      line-height: 40px;
      .title {
        position: relative;
        display: inline-block;
        width: 100%;
        padding-left: 44px;
        font-size: $font-size-medium-x;
        color: $color-text;
        @include border-bottom(20px);
        .arr-down {
          position: absolute;
          right: $space;
          top: 20px;
        }
      }
      .active {
        transition: all 1s ease-in-out;
        .arr-down {
          transform: rotate(180deg);
        }
      }
      .item-list {
        width: 100%;
        .list-content {
          position: relative;
          height: 40px;
          @include border-bottom(20px);
          > a {
            display: block;
            height: 39px;
            padding-left: 35px;
            color: $color-text;
            font-size: $font-size-medium;
            em {
              display: inline-block;
              margin-right: 6px;
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background: $color-text;
              vertical-align: middle;
            }
            &:hover {
              box-sizing: border-box;
              background: #5999c5;
              border: 1px solid #126dac;
              line-height: 38px;
              color: $color-theme;
              em {
                background: $color-theme;
              }
            }
          }
        }
      }
    }
  }

</style>
