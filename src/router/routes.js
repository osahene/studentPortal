
const routes = [
  {
    path: '/',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/Index.vue') },
      { 
        path: '/dashboard/pScience', 
        component: () => import('pages/pScience.vue') 
      },
      { 
        path: '/dashboard/timetable/class', 
        component: () => import('pages/timetable/class.vue') 
      },
      { 
        path: '/dashboard/cwa', 
        component: () => import('pages/cwa.vue') 
      },
      { 
        path: '/dashboard/cal', 
        component: () => import('pages/cal.vue') 
      },
      { 
        path: '/dashboard/todo', 
        component: () => import('pages/toDo.vue') 
      },
      { 
        path: '/dashboard/pol/pol151', 
        component: () => import('pages/pol/pol151.vue') 
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
