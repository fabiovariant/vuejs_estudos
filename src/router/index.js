import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/Home',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: Home
        }

      ]
    }
  ]
})
