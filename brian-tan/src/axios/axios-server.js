import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://localhost:5000/'
    baseURL: 'https://stormy-depths-42139.herokuapp.com/yelp/'
});

export default instance; 