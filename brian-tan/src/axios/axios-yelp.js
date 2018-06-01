import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://api.yelp.com/v3/',
//     headers: {'Authorization': 'Bearer 1XbzOh9CMfrSqUcP-a9K4jsF5MoaniiLgEfCrk1luu4T8EjmDrRQ9SACC2KcGNIwKiAWdd63Q6BAt0GVH6f_ZGt0BFZuBmk3fmwG3mXhDPPrf33AQyxqHwh81RIPW3Yx'}
// });

const instance = axios.create({
    baseURL: 'https://brian-tan.firebaseio.com/'
});

export default instance; 