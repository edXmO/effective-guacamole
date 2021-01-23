import axios from 'axios';

// Request to the ingredients api

export default axios.create({
    baseURL: 'CONSUMING INGREDIENTS API'
})