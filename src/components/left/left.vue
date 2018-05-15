<template>
  <section class="panel">
    <h4>{{title}}</h4>
    <ul class="menus">
      <li @click="showFlag(index,item)" v-for="(item,index) in menuList" :key="index" class="menu-item">
        <span class="title" :class="[{active:item.show}]">
          <img :src="item.src" class="sign"/> {{item.name}}
          <img src="./iconrow.png" class="arr-down"/>
        </span>
        <ul v-show="item.show" class="item-list">
          <li v-for="(list,index) in item.list" :key="index" class="list-content" v-on:click.stop="doThis(index)">
            <router-link :to="{ path: list.path }" :class="{ hover: index===current}"><em></em>{{list.content}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        current: 0
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      menuList: {
        type: Array,
        default: null
      }
    },
    methods: {
      showFlag: function (index, item) {
        // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
        this.menuList.forEach(i => {
          // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么menuList[i]等于false
          if (i.show !== this.menuList[index].show) {
            i.show = false
          }
        })
        item.show = !item.show
      },
      doThis: function (index) {
        this.current = index
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
          padding-left: 20px;
          font-size: $font-size-small;
          font-weight: 700;
          color: $color-text;
          @include border-bottom();
          .sign {
            display: inline-block;
            vertical-align: middle;
          }
          .arr-down {
            position: absolute;
            right: $space;
            top: 20px;
          }
        }
        .active {
          transition: all 1s ease-in-out;
          .arr-down {
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transform: rotate(180deg);
          }
        }
        .item-list {
          width: 100%;
          .list-content {
            position: relative;
            height: 40px;
            @include border-bottom();
            > a {
              display: block;
              height: 39px;
              padding-left: 35px;
              color: $color-text;
              font-size: $font-size-small;
              em {
                display: inline-block;
                margin-right: 6px;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: $color-text;
                vertical-align: middle;
              }
            }
            &:hover {
              a {
                color: #00a4ac;
              }
            }
            .hover {
              box-sizing: border-box;
              background: #5999c5;
              border: 1px solid #126dac;
              line-height: 38px;
              color: $color-theme;
              &:hover {
                color: $color-theme;
              }
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
