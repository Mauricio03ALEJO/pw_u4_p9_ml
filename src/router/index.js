import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requireAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        requireAutorizacion: false,
        esPublica: true
      }
    },
    // Rutas para estudiantes (sin /estudiantes)
    {
      path: '/consultarTodos',
      name: 'consultarTodos',
      component: () => import('../views/ConsultarTodos.vue'),
      meta: {
        requireAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/consultarPorID',
      name: 'consultarPorID',
      component: () => import('../views/ConsultarPorID.vue'),
      meta: {
        requireAutorizacion: false,
        esPublica: true
      }
    },
    {
      path: '/guardar',
      name: 'guardarEstudiante',
      component: () => import('../views/GuardarEstudiante.vue'),
      meta: {
        requireAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/actualizar',
      name: 'actualizarEstudiante',
      component: () => import('../views/ActualizarEstudiante.vue'),
      meta: {
        requireAutorizacion: false,
        esPublica: true
      }
    },
    {
      path: '/actualizarParcial',
      name: 'actualizarParcialEstudiante',
      component: () => import('../views/ActualizarParcialEstudiante.vue'),
      meta: {
        requireAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/eliminar',
      name: 'eliminarEstudiante',
      component: () => import('../views/EliminarEstudiante.vue'),
      meta: {
        requireAutorizacion: false,
        esPublica: true
      }
    },
  ],
})

/* Configuracion del Guardian */
router.beforeEach((to, from, next) => {
  if (to.meta.requireAutorizacion){
    /* le envio a una pagina de login */
    console.log("Redirigiendo a login");
  }else {
    /* le dejo sin validaciones */
    console.log("Pase libre");
    next();
  }
})

export default router
