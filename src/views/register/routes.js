// Views
import AltAirport from '@/views/register/basic/AltAirport'
import CadAirport from '@/views/register/basic/CadAirport'
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
          component: CadAirport
        },
        {
          path: 'airport/:sg_airport',
          name: 'Alterar Aeroporto',
          component: AltAirport
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
