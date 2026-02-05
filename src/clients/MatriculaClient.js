import axios from "axios";

const URL = 'http://localhost:8081/api/matricula/v1.0/estudiantes';

function getToken() {
    return localStorage.getItem('accessToken');
}


const consultarTodos = async() => {
    const data = axios.get(`${URL}`, {headers: {Authorization: `Bearer ${getToken()}`}}).then(r=>r.data);
    return data;
}


const consultarPorId =  async(id) => {
    const data = axios.get(`${URL}/${id}`, {headers: {Authorization: `Bearer ${getToken()}`}}).then(r=>r.data);
    return data;
}


const guardar =  async(body) => {
    const response = await axios.post(`${URL}`, body, {headers: {Authorization: `Bearer ${getToken()}`}}).then(r=>r.data);
    return response;
}


const actualizar =  async(id, body) => {
    const response = await axios.put(`${URL}/${id}`, body, {headers: {Authorization: `Bearer ${getToken()}`}}).then(r=>r.data);
    return response;
}


const actualizarParcial =  async(id, body) => {
    const response = await axios.patch(`${URL}/${id}`, body, {headers: {Authorization: `Bearer ${getToken()}`}}).then(r=>r.data);
    return response;
}


const borrar =  async(id) => {
    axios.delete(`${URL}/${id}`, {headers: {Authorization: `Bearer ${getToken()}`}}).then(r=>r.data);
}


export const consultarTodosFachada =  async() => {
    return await consultarTodos();
}

export const consultarPorIdFachada =  async(id) => {
    return await consultarPorId(id);
}

export const guardarFachada =  async(body) => {
    return await guardar(body);
}

export const actualizarFachada =  async(id, body) => {
    return await actualizar(id, body);
}

export const actualizarParcialFachada =  async(id, body) => {
    return await actualizarParcial(id, body);
}

export const borrarFachada =  async(id) => {
    await borrar(id);
}
