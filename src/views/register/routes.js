// Views
import CadAltAirport from '@/views/register/basic/CadAltAirport'
import CadAirline from '@/views/register/providers/Airline'

export default {
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
          component: CadAltAirport
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
