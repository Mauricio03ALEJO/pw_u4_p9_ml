import axios from 'axios';

// Ahora obtenerToken recibe usuario y password como argumentos
export const obtenerToken = async (usuario, password) => {
    const response = await axios.get(`http://localhost:8082/auth/token?usuario=${usuario}&password=${password}`);
    return response.data;
}

// obtenerTokenFacade también acepta usuario y password
export const obtenerTokenFacade = async (usuario, password) => {
    return await obtenerToken(usuario, password);
}