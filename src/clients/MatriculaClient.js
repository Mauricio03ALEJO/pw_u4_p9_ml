import axios from "axios";

const BaseUrl = 'http://localhost:8081/api/matricula/v1.0/estudiantes';


const consultarTodos = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    console.log("Token en matriculaClient:", token);
    const data = await axios.get(BaseUrl, { headers: { Authorization: `Bearer ${token}` } });
    return data.data;
}


const consultarPorId = async (id) => {
    const token = localStorage.getItem('token');
    const data = await axios.get(`${BaseUrl}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return data.data;
}


const guardar = async (body) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${BaseUrl}`, body, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}


const actualizar = async (id, body) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${BaseUrl}/${id}`, body, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}


const actualizarParcial = async (id, body) => {
    const token = localStorage.getItem('token');
    const response = await axios.patch(`${BaseUrl}/${id}`, body, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}


const borrar = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`${BaseUrl}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
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
