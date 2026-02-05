<template>
  <div>
    <h2>Consultar Todos los Estudiantes</h2>
    <button @click="consultarTodos">Consultar</button>
    <table v-if="estudiantes.length" border="1" style="margin-top:1rem;">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha Nacimiento</th>
          <th>Provincia</th>
          <th>Género</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="est in estudiantes" :key="est.id">
          <td>{{ est.id }}</td>
          <td>{{ est.nombre }}</td>
          <td>{{ est.apellido }}</td>
          <td>{{ est.fechaNacimiento }}</td>
          <td>{{ est.provincia }}</td>
          <td>{{ est.genero }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="error" style="color:red;">{{ error }}</div>
  </div>
</template>

<script>
import { consultarTodosFachada } from '../clients/MatriculaClient';
export default {
  inject: ['getToken'],
  data() {
    return {
      estudiantes: [],
      error: ''
    }
  },
  methods: {
    async consultarTodos() {
      this.error = '';
      try {
        const res = await consultarTodosFachada();
        this.estudiantes = Array.isArray(res) ? res : [];
        if (!this.estudiantes.length) this.error = 'No se encontraron estudiantes.';
      } catch (e) {
        this.error = 'Error al consultar';
        this.estudiantes = [];
      }
    }
  }
}
</script>
