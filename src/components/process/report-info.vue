<template>
  <section>
    <Right :crumbs="crumbs">
      <ul class="nav" slot="nav">
        <li v-for="(list,index) in crumbs" :key="index">
          {{list}}
        </li>
      </ul>
      <div class="select-hock" slot="slt">
        <ul class="items">
          <li class="item-list">
            <label class="list-title">行业类别(国民经济代码)：</label>
            <input type="text" placeholder="点击进行选择" class="type list-content"/>
          </li>
          <li class="item-list">
            <label class="list-title">地区：</label>
            <input type="text" class="area list-content"/>
            <input type="text" class="area list-content"/>
            <input type="text" class="area list-content"/>
          </li>
          <li class="item-list">
            <label class="list-title">污染物种类：</label>
            <input type="text" class="list-content"/>
          </li>
          <li class="item-list">
            <label class="list-title">许可证编号：</label>
            <input type="text" class="list-content"/>
          </li>
          <li class="item-list">
            <label class="list-title">企业名称：</label>
            <input type="text" class="area list-content"/>
          </li>
          <li class="item-list">
            <label class="list-title">发证时间：</label>
            <input type="text" class="area list-content"/>
          </li>
          <li class="item-list">
            <button class="search">查询</button>
          </li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="" slot="form">ccccccc</div>
    </Right>
  </section>
</template>

<script type="text/ecmascript-6">
  import Right from 'components/right/right'

  export default {
    data() {
      return {
        crumbs: ['业务办理', '监督管理', '许可执行情况']
      }
    },
    components: {
      Right
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/css/element";
  @import "../../common/css/container";

  .select-hock {
    padding-bottom: 0 !important;
    .items {
      .item-list {
        margin-bottom: 20px;
        .list-content {
          @include ipt(120px);
        }
        .type {
          width: 200px;
        }
        .area {
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
          }
        }
        .search {
          display: block;
          @include btn();
        }
      }
    }
  }
</style>
