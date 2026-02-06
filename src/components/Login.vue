<template>
    <div class="login">
        <h2>Login</h2>
        <input v-model="usuario" type="text" placeholder="Usuario">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button type="submit" @click="login">Entrar</button>
        <div v-if="error" class="error-message">{{ error }}</div>
    </div>
</template>

<script>
import { obtenerTokenFacade } from '../clients/AuthClient';
export default {
    data(){
        return{
            usuario: '', 
            password: '', 
            error: ''
        };
    },
    methods: {
        async login(){
            this.error = '';
            try {
                // Llama a la API usando los valores del formulario
                const response = await obtenerTokenFacade(this.usuario, this.password);
                const TOKEN = response.accessToken || response.token || null;
                if(TOKEN){
                    localStorage.setItem('token', TOKEN);
                    localStorage.setItem('estaAutenticado', true);
                    this.error = '';
                } else {
                    this.error = 'Usuario o contraseña incorrectos.';
                }
            } catch (error) {
                this.error = 'Usuario o contraseña incorrectos.';
            }
        }
    }
}
</script>

<style>
.login {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
input{
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
}
button {
    width: 100%;
    padding: 8px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
 .error-message {
    color: #fff;
    background: #e74c3c;
    padding: 8px;
    border-radius: 4px;
    margin-top: 10px;
    text-align: center;
}
</style>