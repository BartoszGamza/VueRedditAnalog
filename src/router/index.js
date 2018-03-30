import Vue from 'vue'
import Router from 'vue-router'
import Hot from '@/components/Hot'
import Rising from '@/components/Rising'
import New from '@/components/New'
import Controversial from '@/components/Controversial'
import Top from '@/components/Top'
import Gold from '@/components/Gold'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/rising',
      name: 'Rising',
      component: Rising
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/controversial',
      name: 'Controversial',
      component: Controversial
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/gold',
      name: 'Gold',
      component: Gold
    }
  ]
})
