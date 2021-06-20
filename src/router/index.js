import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import welcome from '@/components/welcome.vue'
import preset from '@/components/preset.vue'
Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'preset',
      component: preset
    },
  
  ]
})
