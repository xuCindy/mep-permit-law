import Vue from 'vue'
import Router from 'vue-router'
import Process from 'components/process/process'
import Archives from 'components/archives/archives'
import Analysis from 'components/analysis/analysis'
import Attachment from 'components/attachment/attachment'
import System from 'components/system/system'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/process'
    },
    {
      path: '/process',
      component: Process
    },
    {
      path: '/archives',
      component: Archives
    },
    {
      path: '/analysis',
      component: Analysis
    },
    {
      path: '/attachment',
      component: Attachment
    },
    {
      path: '/system',
      component: System
    }
  ]
})
