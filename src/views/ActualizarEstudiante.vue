<template>
  <div>
    <h2>Actualizar Estudiante</h2>
    <form @submit.prevent="actualizar">
      <input v-model="id" placeholder="ID" required />
      <input v-model="nombre" placeholder="Nombre" required />
      <input v-model="apellido" placeholder="Apellido" required />
      <input v-model="fechaNacimiento" placeholder="Fecha Nacimiento (YYYY-MM-DDTHH:mm:ss)" required />
      <button type="submit">Actualizar</button>
    </form>
    <pre v-if="resultado">{{ resultado }}</pre>
  </div>
</template>

<script>
import { actualizarFachada } from '../clients/MatriculaClient';
export default {
  data() {
    return {
      id: '',
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      resultado: ''
    }
  },
  methods: {
    async actualizar() {
      try {
        const body = {
          nombre: this.nombre,
          apellido: this.apellido,
          fechaNacimiento: this.fechaNacimiento
        };
        const res = await actualizarFachada(this.id, body);
        this.resultado = JSON.stringify(res, null, 2);
      } catch (e) {
        this.resultado = 'Error al actualizar';
      }
    }
  }
}
</script>
