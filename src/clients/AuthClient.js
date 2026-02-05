import axios from 'axios';
const user = "admin";
const password = "admin123";

export const obtenerToken = async () => {
    const response = await axios.get(`http://localhost:8082/auth/token?usuario=${user}&password=${password}`);
    return response.data;
}

export const obtenerTokenFacade = async () => {
    return await obtenerToken();
}