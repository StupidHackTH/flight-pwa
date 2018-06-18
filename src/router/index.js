import Vue from 'vue'
import Router from 'vue-router'
import Flight from '@/components/Flight'
import DetailFlight from '@/components/DetailFlight'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Flight',
      name: 'Flight',
      component: Flight
    },
    {
      path: '/detailFlight',
      name: 'DetailFlight',
      component: DetailFlight
    }
  ]
})
