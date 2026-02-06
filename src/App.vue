
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { provide } from 'vue'
import { obtenerTokenFacade } from './clients/AuthClient'

// Provee getToken a toda la app, ahora acepta usuario y password
provide('getToken', async (usuario, password) => {
  const tokenData = await obtenerTokenFacade(usuario, password)
  return tokenData.accessToken
})
</script>

<template>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/consultarTodos">Consultar Todos</RouterLink>
    <RouterLink to="/consultarPorID">Consultar por ID</RouterLink>
    <RouterLink to="/guardar">Guardar Estudiante</RouterLink>
    <RouterLink to="/actualizar">Actualizar Estudiante</RouterLink>
    <RouterLink to="/actualizarParcial">Actualizar Parcial</RouterLink>
    <RouterLink to="/eliminar">Eliminar Estudiante</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
