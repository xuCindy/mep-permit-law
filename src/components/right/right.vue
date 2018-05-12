<template>
  <section :class='[panelClass,cname]'>
    <div class="crumbs-nav" :crumbs="crumbs">
      <span>位置：</span>
      <slot></slot>
    </div>
    <div class="select-option">
    </div>
    <v-table
      :columns='columns'
      :table-data='tableData'
      :show-vertical-border='false'
    ></v-table>
  </section>
</template>

<script type='text/ecmascript-6'>
  export default {
    props: {
      cname: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      crumbs: {
        type: Array,
        default: null
      }
    },
    data() {
      return {
        tableData: [
          {'name': '赵伟', 'tel': '156*****1987', 'hobby': '钢琴、书法、唱歌', 'address': '上海市黄浦区金陵东路569号17楼'},
          {'name': '李伟', 'tel': '182*****1538', 'hobby': '钢琴、书法、唱歌', 'address': '上海市奉贤区南桥镇立新路12号2楼'},
          {'name': '孙伟', 'tel': '161*****0097', 'hobby': '钢琴、书法、唱歌', 'address': '上海市崇明县城桥镇八一路739号'},
          {'name': '周伟', 'tel': '197*****1123', 'hobby': '钢琴、书法、唱歌', 'address': '上海市青浦区青浦镇章浜路24号'},
          {'name': '吴伟', 'tel': '183*****6678', 'hobby': '钢琴、书法、唱歌', 'address': '上海市松江区乐都西路867-871号'}
        ],
        columns: [
          {field: 'name', title: '姓名', width: 100, titleAlign: 'center', columnAlign: 'center'},
          {field: 'tel', title: '手机号码', width: 260, titleAlign: 'center', columnAlign: 'center'},
          {field: 'hobby', title: '爱好', width: 330, titleAlign: 'center', columnAlign: 'center'},
          {field: 'address', title: '地址', titleAlign: 'center', columnAlign: 'left'}
        ],
        panelClass: 'panel'
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../common/css/variable';
  @import '../../common/css/element';

  .panel {
    .crumbs-nav {
      position: relative;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      font-size: 0;
      > span {
        display: inline-block;
        padding-left: 15px;
        font-size: $font-size-small;
        color: $color-span;
        line-height: 40px;
        vertical-align: top;
      }
    }
    .select-option {
      margin-bottom: $space;
      background: #fff;
      height: 100px;
    }
  }
</style>
