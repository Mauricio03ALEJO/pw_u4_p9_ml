import axios from "axios";

const consultarTodos = async() => {
    const data = axios.get('http://localhost:8081/api/matricula/v1.0/estudiantes').then(r=>r.data);
    return data;
}

const consultarPorId =  async(id) => {
    const data = axios.get(`http://localhost:8081/api/matricula/v1.0/estudiantes/${id}`).then(r=>r.data);
    return data;
}

const guardar =  async(body) => {
    const response = await axios.post('http://localhost:8081/api/matricula/v1.0/estudiantes', body);
    return response.data;
}

const actualizar =  async(id, body) => {
    const response = await axios.put(`http://localhost:8081/api/matricula/v1.0/estudiantes/${id}`, body);
    return response.data;
}

const actualizarParcial =  async(id, body) => {
    const response = await axios.patch(`http://localhost:8081/api/matricula/v1.0/estudiantes/${id}`, body);
    return response.data;
}

const borrar =  async(id) => {
    axios.delete(`http://localhost:8081/api/matricula/v1.0/estudiantes/${id}`).then(r=>r.data);
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
