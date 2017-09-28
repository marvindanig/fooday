import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Fooday from '@/components/Fooday'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Fooday', component: Fooday },
    { path: '/hello', name: 'Hello', component: Hello }
  ]
})
