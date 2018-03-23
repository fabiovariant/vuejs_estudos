import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Home from '@/views/Home'
import CadAirport from '@/views/register/basic/Airport'
import CadAirline from '@/views/register/providers/Airline'

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
        },
        {
          path: 'register',
          name: 'Cadastro',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'basic',
              name: 'Basico',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'airport',
                  name: 'Aeroporto',
                  component: CadAirport
                }
              ]
            },
            {
              path: 'provider',
              name: 'Fornecedor',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'airline',
                  name: 'Cia. Aérea',
                  component: CadAirline
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
