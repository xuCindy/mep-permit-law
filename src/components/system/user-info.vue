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
            <label class="list-title">用户名称：</label>
            <input type="text" class="user-name list-content"/>
          </li>
          <li class="item-list">
            <label class="list-title">登录账号：</label>
            <input type="text" class="account list-content"/>
          </li>
          <li class="item-list">
            <button class="search">查询</button>
          </li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="form-hock" slot="form">
        <div class="tab-header">
          <ul class="tab">
            <li class="tab-item active">
              <span class="list">用户列表</span>
            </li>
          </ul>
          <div class="operate">
            <button class="add">添加</button>
          </div>
        </div>
        <div class="excel">
          <v-table
            is-horizontal-resize
            style="width:100%"
            title-bg-color="#e7f0f7"
            even-bg-color="#F8F8F8"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#e5ebee"
            @on-custom-comp="customCompFunc"
          ></v-table>
        </div>
      </div>
    </Right>
  </section>
</template>

<script type="text/ecmascript-6">
  import Right from 'components/right/right'

  export default {
    data() {
      return {
        crumbs: ['系统维护', '系统维护', '用户管理'],
        tableData: [
          {
            'id': '1',
            'role': '管理员',
            'role_code': 'admin',
            'area': '角色省市（区）县',
            'right': '用户管理',
            'usability': '可用'
          },
          {
            'id': '1',
            'role': '管理员',
            'role_code': 'admin',
            'area': '角色省市（区）县',
            'right': '用户管理',
            'usability': '可用'
          },
          {
            'id': '1',
            'role': '管理员',
            'role_code': 'admin',
            'area': '角色省市（区）县',
            'right': '用户管理',
            'usability': '可用'
          },
          {
            'id': '1',
            'role': '管理员',
            'role_code': 'admin',
            'area': '角色省市（区）县',
            'right': '用户管理',
            'usability': '可用'
          },
          {
            'id': '1',
            'role': '管理员',
            'role_code': 'admin',
            'area': '角色省市（区）县',
            'right': '用户管理',
            'usability': '可用'
          }
        ],
        columns: [
          {
            field: 'id',
            title: '序号',
            width: 50,
            titleAlign: 'center',
            columnAlign: 'center',
            isResize: true
          },
          {
            field: 'role',
            title: '角色名称',
            width: 100,
            titleAlign: 'left',
            columnAlign: 'left',
            isResize: true
          },
          {
            field: 'role_code',
            title: '角色代码',
            width: 100,
            titleAlign: 'left',
            columnAlign: 'left',
            isResize: true
          },
          {
            field: 'area',
            title: '角色省市（区）县',
            width: 190,
            titleAlign: 'left',
            columnAlign: 'left',
            isResize: true
          },
          {
            field: 'right',
            title: '功能权限',
            width: 420,
            titleAlign: 'left',
            columnAlign: 'left',
            isResize: true
          },
          {
            field: 'usability',
            title: '可用性',
            width: 100,
            titleAlign: 'left',
            columnAlign: 'left',
            isResize: true
          },
          {
            field: 'custome-adv',
            title: '操作',
            width: 160,
            titleAlign: 'center',
            columnAlign: 'center',
            componentName: 'table-operation',
            isResize: true
          }
        ]
      }
    },
    methods: {
      customCompFunc(params) {
        console.log(params)
        if (params.type === 'delete') {
          // do delete operation
          // this.$delete(this.tableData, params.index)
        } else if (params.type === 'edit') {
          // do edit operation
        }
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
      .search {
        display: block;
        @include btn();
      }
    }
  }

  .form-hock {
    .operate {
      .add {
        position: relative;
        @include btn();
        border: 1px solid $color-button-active;
        background: $color-theme;
        color: $color-button-active;
        text-align: right;
        padding-right: 20px;
        &:before {
          position: absolute;
          content: '';
          width: 15px;
          height: 15px;
          background: url('http://47.94.22.148:8091/static/images/icon_add_b.png') no-repeat 0 0;
          top: 7px;
          left: 20px;
        }
        &:hover {
          color: $color-theme;
          background: $color-button-active;
          &:before {
            background-image: url('http://47.94.22.148:8091/static/images/icon_add.png');
          }
        }
      }
    }
  }
</style>
