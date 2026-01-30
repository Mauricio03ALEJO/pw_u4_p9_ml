<template>
  <div>
    <h2>Actualizar Parcial Estudiante</h2>
    <form @submit.prevent="actualizarParcial">
      <input v-model="id" placeholder="ID" required />
      <input v-model="nombre" placeholder="Nuevo Nombre" required />
      <button type="submit">Actualizar Parcial</button>
    </form>
    <pre v-if="resultado">{{ resultado }}</pre>
  </div>
</template>

<script>
import { actualizarParcialFachada } from '../clients/MatriculaClient';
export default {
  data() {
    return {
      id: '',
      nombre: '',
      resultado: ''
    }
  },
  methods: {
    async actualizarParcial() {
      try {
        const body = {
          nombre: this.nombre
        };
        const res = await actualizarParcialFachada(this.id, body);
        this.resultado = JSON.stringify(res, null, 2);
      } catch (e) {
        this.resultado = 'Error al actualizar parcialmente';
      }
    }
  }
}
</script>
