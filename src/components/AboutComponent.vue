
<template>
	<div>
		<button @click="consultarTodos">Consultar Todos</button>
		<button @click="consultarPorId">Consultar por ID</button>
		<button @click="guardar">Guardar</button>
		<button @click="actualizar">Actualizar</button>
		<button @click="actualizarParcial">Actualizar Parcial</button>
		<button @click="borrar">Borrar</button>
		<div style="margin-top: 1em;">
			<pre>{{ resultado }}</pre>
		</div>
	</div>
</template>

<script>
import { consultarTodosFachada, consultarPorIdFachada, guardarFachada, actualizarFachada, actualizarParcialFachada, borrarFachada } from '../clients/MatriculaClient';

export default {
	data() {
		return {
			resultado: '',
		};
	},
	methods: {
		async consultarTodos() {
			const res = await consultarTodosFachada();
			console.log('Consultar Todos:', res);
			this.resultado = res;
		},
		async consultarPorId() {
			const id = prompt('Ingrese el ID a consultar:');
			if (id) {
				try {
					const res = await consultarPorIdFachada(id);
					console.log('Consultar por ID:', res);
					this.resultado = res;
				} catch (e) {
					console.error('Error al consultar por ID:', e);
					this.resultado = 'Error al consultar por ID';
				}
			}
		},
		async guardar() {
			const nombre = prompt('Nombre:');
			const apellido = prompt('Apellido:');
			if (nombre && apellido) {
				const body = { nombre, apellido };
				this.resultado = await guardarFachada(body);
			}
		},
		async actualizar() {
			const id = prompt('ID a actualizar:');
			const nombre = prompt('Nuevo nombre:');
			const apellido = prompt('Nuevo apellido:');
			if (id && nombre && apellido) {
				const body = { nombre, apellido };
				this.resultado = await actualizarFachada(id, body);
			}
		},
		async actualizarParcial() {
			const id = prompt('ID a actualizar parcialmente:');
			const campo = prompt('Campo a actualizar (nombre o apellido):');
			const valor = prompt('Nuevo valor:');
			if (id && campo && valor) {
				const body = { [campo]: valor };
				this.resultado = await actualizarParcialFachada(id, body);
			}
		},
		async borrar() {
			const id = prompt('ID a borrar:');
			if (id) {
				await borrarFachada(id);
				this.resultado = `Borrado ID: ${id}`;
			}
		},
	},
};
</script>

<style scoped>
button {
	margin: 0.5em;
	padding: 0.5em 1em;
	font-size: 1em;
}
pre {
	background: #f4f4f4;
	padding: 1em;
	border-radius: 5px;
}
</style>