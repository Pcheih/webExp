import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import welcome from '@/components/welcome.vue'
Vue.use(Router)
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }

export default new Router({
  routes: [
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
  
  ]
})
