import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://apihoteles.herokuapp.com'
})
export default clienteAxios

// http://10.0.2.2:5000
// http://localhost:5000