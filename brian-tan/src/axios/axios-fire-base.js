import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://brian-tan.firebaseio.com/'
});

export default instance; 