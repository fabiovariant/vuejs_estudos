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
      url: '/cadastro',
      icon: 'icon-cloud-upload',
      children: [
        {
          name: 'Básico',
          url: '/cadastro/basico',
          children: [
            {
              name: ' Aeroporto',
              url: '/cadastro/basico/aeroporto'
            }
          ]
        }
      ]
    },
    {
      name: 'Pesquisar/Alterar',
      url: '/pesquisa',
      icon: 'icon-magnifier-add',
      children: [
        {
          name: 'Básico',
          url: '/pesquisa/basico',
          children: [
            {
              name: ' Aeroporto',
              url: '/pesquisa/basico/aeroporto'
            }
          ]
        }
      ]
    }
  ]
}
