import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home.vue'
import player from '@/components/player.vue'
import admin from '@/components/admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //用:表示动态匹配路由（即:后不管是什么 都匹配到这个路由)
    // { path: '/:id', component: dynamicRouterTest }
    { 
      path: '/',
      // name: 'preset',
      component: home
    },
    {
      path:'/coach',
      component:player
    },
    {
      path:'/player',
      component:player
    },
    {
      path:'/admin',
      component:admin
    }
  ]
})
