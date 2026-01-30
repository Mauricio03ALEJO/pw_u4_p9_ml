import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    // Rutas para estudiantes (sin /estudiantes)
    {
      path: '/consultarTodos',
      name: 'consultarTodos',
      component: () => import('../views/ConsultarTodos.vue'),
    },
    {
      path: '/consultarPorID',
      name: 'consultarPorID',
      component: () => import('../views/ConsultarPorID.vue'),
    },
    {
      path: '/guardar',
      name: 'guardarEstudiante',
      component: () => import('../views/GuardarEstudiante.vue'),
    },
    {
      path: '/actualizar',
      name: 'actualizarEstudiante',
      component: () => import('../views/ActualizarEstudiante.vue'),
    },
    {
      path: '/actualizarParcial',
      name: 'actualizarParcialEstudiante',
      component: () => import('../views/ActualizarParcialEstudiante.vue'),
    },
    {
      path: '/eliminar',
      name: 'eliminarEstudiante',
      component: () => import('../views/EliminarEstudiante.vue'),
    },
  ],
})

export default router
