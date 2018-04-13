// Views
import CadAltAirport from '@/views/register/basic/CadAltAirport'
import CadAirline from '@/views/register/providers/Airline'
import SearchAirport from '@/views/register/basic/SearchAirport'

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
          name: 'Buscar Aeroporto',
          component: SearchAirport
        },
        {
          path: 'airport/new',
          name: 'Cadastrar Aeroporto',
          component: CadAltAirport
        },
        {
          path: 'airport/:sg_airport',
          name: 'Alterar Aeroporto',
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
