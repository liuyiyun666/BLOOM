import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/ayun/home'
import My from '@/components/huihui/my'
import Search from '@/components/huihui/search'
import Classify from '@/components/huihui/classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
