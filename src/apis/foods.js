import axios from 'axios';

// Requests a la bbdd mongoDB donde se
//  guardan los datos de usuarios y registros


export default axios.create({
    baseURL: 'http://localhost:3001'
});