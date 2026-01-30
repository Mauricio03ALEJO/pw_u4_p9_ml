
<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <nav style="margin: 2em 0;">
      <h2>Gestión de Estudiantes</h2>
      <ul style="list-style: none; padding: 0;">
        <li><RouterLink to="/estudiantes/consultarTodos">Consultar Todos</RouterLink></li>
        <li><RouterLink to="/estudiantes/consultarPorID">Consultar por ID</RouterLink></li>
        <li><RouterLink to="/estudiantes/guardar">Guardar</RouterLink></li>
        <li><RouterLink to="/estudiantes/actualizar">Actualizar</RouterLink></li>
        <li><RouterLink to="/estudiantes/actualizarParcial">Actualizar Parcial</RouterLink></li>
        <li><RouterLink to="/estudiantes/eliminar">Eliminar</RouterLink></li>
      </ul>
    </nav>
  </main>
</template>
