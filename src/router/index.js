import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import welcome from '@/components/welcome.vue'
import preset from '@/components/preset.vue'
import dynamicRouterTest from '@/components/dynamicRouterTest.vue'
import home from '@/components/home.vue'
import player from '@/components/player.vue'
import admin from '@/components/admin.vue'
import login from '@/components/login.vue'
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
      path:'/player',
      component:player
    },
    {
      path:'/admin',
      component:admin
    }
  ]
})
