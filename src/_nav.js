export default {
  items: [
    {
      title: true,
      name: 'Ações',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Home',
      url: '/home',
      icon: 'icon-home'
    },
    {
      name: 'Cadastrar',
      url: '/register',
      icon: 'icon-cloud-upload',
      children: [
        {
          name: 'Básico',
          url: '/register/basic',
          children: [
            {
              name: 'Aeroporto',
              url: '/register/basic/airport'
            }
          ]
        },
        {
          name: 'Fornecedores',
          url: '/register/provider',
          children: [
            {
              name: 'Cia. Aérea',
              url: '/register/provider/airline'
            }
          ]
        }
      ]
    },
    {
      name: 'Pesquisar/Alterar',
      url: '/search_alt',
      icon: 'icon-magnifier-add',
      children: [
        {
          name: 'Básico',
          url: '/search_alt/basic',
          children: [
            {
              name: ' Aeroporto',
              url: '/search_alt/basic/airport'
            }
          ]
        }
      ]
    }
  ]
}
