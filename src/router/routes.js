export const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: _ => import('@/views/layout/layout'),
    children: [
      {
        path: '/home',
        component: _ => import('@/views/test')
      },
      {
        path: '/role',
        name: 'role',
        component: _ => import('@/views/manage/role')
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        component: _ => import('@/views/userInfo/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: _ => import('@/views/login/login')
  }
]
