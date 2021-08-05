interface Menu {
  icon: string
  title: string
  to: string
  action: string
}

export const menuItems: Menu[] = [
  {
    icon: 'mdi-view-list',
    title: '商品一覧',
    to: '/',
    action: ''
  },
    {
    icon: 'mdi-cart',
    title: 'カート',
    to: '/cart',
    action: ''
  },
  {
    icon: 'mdi-history',
    title: '注文履歴',
    to: '/history',
    action: ''
  },
  {
    icon: 'mdi-login',
    title: 'ログイン',
    to: '/login',
    action: ''
  },
  {
    icon: 'mdi-logout',
    title: 'ログアウト',
    to: '',
    action: 'logout'
  },
]
