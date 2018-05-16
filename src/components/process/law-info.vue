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
            <input type="text" class="type list-content"/>
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
        crumbs: ['业务办理', '监督检查', '监督检查情况']
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
    .items {
      .list-content {
        @include ipt(150px);
      }
      .type {
        width: 200px;
      }
      .search {
        display: block;
        @include btn();
      }
    }
  }
</style>
