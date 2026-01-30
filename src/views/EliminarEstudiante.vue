<template>
  <div>
    <h2>Eliminar Estudiante</h2>
    <input v-model="id" placeholder="ID" />
    <button @click="eliminar">Eliminar</button>
    <pre v-if="resultado">{{ resultado }}</pre>
  </div>
</template>

<script>
import { borrarFachada } from '../clients/MatriculaClient';
export default {
  data() {
    return {
      id: '',
      resultado: ''
    }
  },
  methods: {
    async eliminar() {
      try {
        await borrarFachada(this.id);
        this.resultado = `Estudiante con ID ${this.id} eliminado.`;
      } catch (e) {
        this.resultado = 'Error al eliminar';
      }
    }
  }
}
</script>
