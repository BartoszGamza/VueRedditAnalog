import Vue from 'vue'
import Router from 'vue-router'
import PostsView from '@/components/PostsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostsView',
      component: PostsView
    }
  ]
})
