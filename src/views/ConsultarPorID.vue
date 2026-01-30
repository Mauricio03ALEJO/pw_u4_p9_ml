<template>
  <div>
    <h2>Consultar Estudiante por ID</h2>
    <input v-model="id" placeholder="ID del estudiante" />
    <button @click="consultarPorId">Consultar</button>
    <div v-if="estudiante">
      <ul>
        <li><b>ID:</b> {{ estudiante.id }}</li>
        <li><b>Nombre:</b> {{ estudiante.nombre }}</li>
        <li><b>Apellido:</b> {{ estudiante.apellido }}</li>
        <li><b>Fecha Nacimiento:</b> {{ estudiante.fechaNacimiento }}</li>
        <li><b>Provincia:</b> {{ estudiante.provincia }}</li>
        <li><b>Género:</b> {{ estudiante.genero }}</li>
      </ul>
    </div>
    <div v-if="error" style="color:red;">{{ error }}</div>
  </div>
</template>

<script>
import { consultarPorIdFachada } from '../clients/MatriculaClient';
export default {
  data() {
    return {
      id: '',
      estudiante: null,
      error: ''
    }
  },
  methods: {
    async consultarPorId() {
      this.error = '';
      this.estudiante = null;
      if (!this.id) return;
      try {
        const res = await consultarPorIdFachada(this.id);
        if (res && res.id) {
          this.estudiante = res;
        } else {
          this.error = 'No se encontró el estudiante.';
        }
      } catch (e) {
        this.error = 'Error al consultar';
      }
    }
  }
}
</script>
