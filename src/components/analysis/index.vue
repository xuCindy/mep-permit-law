<template>
  <div class="content">
    <div class="panel-left">
      <Left title="统计分析" :menuList="menuList"></Left>
    </div>
    <div class="panel-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Left from 'components/left/left'
  import Right from 'components/right/right'

  export default {
    data() {
      return {
        menuList: [
          {
            name: '实施检查统计',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                content: '地区',
                path: '/analysis/lawStatistics',
                isHover: false
              },
              {
                content: '行业',
                path: '/analysis/lawStatistics/industry',
                isHover: false
              },
              {
                content: '流域',
                path: '/analysis/lawStatistics/river',
                isHover: false
              },
              {
                content: '地区-行业',
                path: '/analysis/lawStatistics/areaIndustry',
                isHover: false
              }
            ],
            show: true
          },
          {
            name: '执行报告填写情况',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                content: '地区',
                path: '/analysis/reportStatistics',
                isHover: false
              },
              {
                content: '行业',
                path: '/analysis/reportStatistics/industry',
                isHover: false
              },
              {
                content: '流域',
                path: '/analysis/reportStatistics/river',
                isHover: false
              },
              {
                content: '地区-行业',
                path: '/analysis/reportStatistics/areaIndustry',
                isHover: false
              }
            ],
            show: false
          },
          {
            name: '实际排放量统计',
            src: 'http://47.94.22.148:8091/static/images/leftico01.png',
            list: [
              {
                content: '地区',
                path: '/analysis/emissionsStatistics',
                isHover: false
              },
              {
                content: '行业',
                path: '/analysis/emissionsStatistics/industry',
                isHover: false
              },
              {
                content: '流域',
                path: '/analysis/emissionsStatistics/river',
                isHover: false
              },
              {
                content: '地区-行业',
                path: '/analysis/emissionsStatistics/areaIndustry',
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
      Right
    }
  }
</script>

<style lang="scss" scoped>
</style>
