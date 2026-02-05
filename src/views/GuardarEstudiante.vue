<template>
  <div>
    <h2>Guardar Estudiante</h2>
    <form @submit.prevent="guardar">
      <input v-model="nombre" placeholder="Nombre" required />
      <input v-model="apellido" placeholder="Apellido" required />
      <input v-model="fechaNacimiento" placeholder="Fecha Nacimiento (YYYY-MM-DDTHH:mm:ss)" required />
      <input v-model="provincia" placeholder="Provincia" required />
      <input v-model="genero" placeholder="Género" required />
      <button type="submit">Guardar</button>
    </form>
    <pre v-if="resultado">{{ resultado }}</pre>
  </div>
</template>

<script>
import { guardarFachada } from '../clients/MatriculaClient';
export default {
  inject: ['getToken'],
  data() {
    return {
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      provincia: '',
      genero: '',
      resultado: ''
    }
  },
  methods: {
    async guardar() {
      try {
        const body = {
          nombre: this.nombre,
          apellido: this.apellido,
          fechaNacimiento: this.fechaNacimiento,
          provincia: this.provincia,
          genero: this.genero
        };
        const res = await guardarFachada(body);
        this.resultado = JSON.stringify(res, null, 2);
      } catch (e) {
        this.resultado = 'Error al guardar';
      }
    }
  }
}
</script>
