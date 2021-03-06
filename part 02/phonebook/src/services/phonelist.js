import axios from 'axios';
const baseUrl = 'http://localhost:3001/phones'

const getAllPhones = () =>{
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const create = newObj => {
    const request = axios.post(baseUrl,newObj);
    return request.then(response => response.data);
}

const remove = id =>{
    return axios.delete(`${baseUrl}/${id}`);
}

const update = (newObj, id) => {
    const request = axios.put(`${baseUrl}/${id}`,newObj);
    return request.then(response => response.data);
}
export default {getAllPhones, create, remove, update}