import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FecharCompraView from '../views/FecharCompraView.vue'
import EntregaView from '../views/EntregaView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fechar-compra',
      name: 'fechar-compra',
      component: FecharCompraView
    },
    {
      path: '/entrega',
      name: 'entrega',
      component: EntregaView
    },
  ]
})

export default router
