import Vue from 'vue'
import Router from 'vue-router'
// 一级导航
import Process from 'components/process/index'
import Archives from 'components/archives/index'
import Analysis from 'components/analysis/index'
import Attachment from 'components/attachment/index'
import System from 'components/system/index'
// 二级导航 业务处理
import ReportInfo from 'components/process/report-info'
import LawInfo from 'components/process/law-info'
import NoPermit from 'components/process/no-permit'
import Correct from 'components/process/correct'
import Back from 'components/process/back'
// 二级导航 实施档案库
import ReportAll from 'components/archives/report-all'
import ReportExcel from 'components/archives/report-excel'
import SpaceSource from 'components/archives/space-source'
import SpaceDischarge from 'components/archives/space-discharge'
// 二级导航 统计分析
// 二级导航 资料附件
import Country from 'components/attachment/country'
import Province from 'components/attachment/province'
// 二级导航 系统维护
import UserInfo from 'components/system/user-info'
import Role from 'components/system/role'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/process'
    },
    {
      path: '/process',
      component: Process,
      children: [
        {
          path: '/',
          redirect: '/process/report-info'
        },
        {
          path: '/process/report-info',
          component: ReportInfo
        },
        {
          path: '/process/law-info',
          component: LawInfo
        },
        {
          path: '/process/no-permit',
          component: NoPermit
        },
        {
          path: '/process/correct',
          component: Correct
        },
        {
          path: '/process/back',
          component: Back
        }
      ]
    },
    {
      path: '/archives',
      component: Archives,
      children: [
        {
          path: '/',
          redirect: '/archives/report-all'
        },
        {
          path: '/archives/report-all',
          component: ReportAll
        },
        {
          path: '/archives/report-excel',
          component: ReportExcel
        },
        {
          path: '/archives/space-source',
          component: SpaceSource
        },
        {
          path: '/archives/space-discharge',
          component: SpaceDischarge
        }
      ]
    },
    {
      path: '/analysis',
      component: Analysis,
      children: [
      ]
    },
    {
      path: '/attachment',
      component: Attachment,
      children: [
        {
          path: '/',
          redirect: '/attachment/country'
        },
        {
          path: '/attachment/country',
          component: Country
        },
        {
          path: '/attachment/province',
          component: Province
        }
      ]
    },
    {
      path: '/system',
      component: System,
      children: [
        {
          path: '/',
          redirect: '/system/user-info'
        },
        {
          path: '/system/user-info',
          component: UserInfo
        },
        {
          path: 'system/role',
          component: Role
        }
      ]
    }
  ]
})
