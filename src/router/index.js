import Vue from 'vue'
import Router from 'vue-router'
import MainContentView from '@/components/Home/MainContent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContentView',
      component: MainContentView
    }
  ]
})
