
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect:'/quotidien' ,  component: () => import('pages/PageIndex.vue') },
      { path: '/index',  component: () => import('pages/PageIndex.vue') },
      { path: '/quotidien',  component: () => import('pages/PageCalendrierQuotidien.vue') },
      { path: '/mensuel',  component: () => import('pages/PageCalendrierMensuel.vue') },
      { path: '/statistiques',  component: () => import('pages/PageStatistiques.vue') },
      { path: '/parametres',  component: () => import('pages/PageParametres.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

