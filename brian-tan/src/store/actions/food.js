import axios from '../../axios/axios-yelp';

import * as actionTypes from './actionTypes';

export const searchYelpSuccess = (restaurants) => {
    return {
        type: actionTypes.SEARCH_YELP_SUCCESS,
        restaurants: restaurants
    };
}

export const searchYelpFail = () => {
    return {
        type: actionTypes.SEARCH_YELP_FAIL
    };
}

export const searchYelp = (searchTerm) => {
    return dispatch => {
        // axios.get('/businesses/' + searchTerm)
        axios.get('/yelpResults.json')
            .then(res => {
                //use to format data from firebase
                const formattedData = Object.keys(res.data).map(key => {
                    return {
                        ...res.data[key],
                        id: key
                    };
                });
                console.log(formattedData);
                dispatch(searchYelpSuccess(formattedData));
            })
            .catch(err => {
                console.log(err);
                //dispatch(searchYelpFail());
            });
    }
}

//https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco
//https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco


