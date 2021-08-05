interface Menu {
  icon: string
  title: string
  to: string
  action: string
  atLogin: boolean
  atLogout: boolean
}

export const menuItems: Menu[] = [
  {
    icon: 'mdi-view-list',
    title: '商品一覧',
    to: '/',
    action: '',
    atLogin: true,
    atLogout: true
  },
    {
    icon: 'mdi-cart',
    title: 'カート',
    to: '/cart',
    action: '',
    atLogin: true,
    atLogout: true
  },
  {
    icon: 'mdi-history',
    title: '注文履歴',
    to: '/history',
    action: '',
    atLogin: true,
    atLogout: false
  },
  {
    icon: 'mdi-login',
    title: 'ログイン',
    to: '/login',
    action: '',
    atLogin: false,
    atLogout: true

  },
  {
    icon: 'mdi-logout',
    title: 'ログアウト',
    to: '',
    action: 'logout',
    atLogin: true,
    atLogout: false

  },
]
