import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/yelp/'
});

export default instance; 