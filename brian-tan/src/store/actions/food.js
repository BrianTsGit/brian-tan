import axios from '../../axios/axios-yelp';

import * as actionTypes from './actionTypes';

export const searchYelpInit = () => {
    return {
        type: actionTypes.SEARCH_YELP_INIT
    };
};

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
    //add loader
    return dispatch => {
        dispatch(searchYelpInit());
        // axios.get('/businesses/' + searchTerm)
        axios.get('/yelpResults.json')
            .then(res => {
                //use to format data from firebase
                // const formattedData = Object.keys(res.data).map(key => {
                //     return {
                //         ...res.data[key],
                //         id: key
                //     };
                // });
                dispatch(searchYelpSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
                //dispatch(searchYelpFail());
            });
    }
}

export const saveRestaurantInit = () => {
    return {
        type: actionTypes.HIT_LIST_INIT
    };
};

export const getHitListSuccess = (hitList) => {
    return {
        type: actionTypes.GET_HIT_LIST_SUCCESS,
        hitList: hitList
    };
};

export const getHitListFail = () => {
    return {
        type: actionTypes.GET_HITLIST_FAIL
    };
};

export const getHitList = () => {
    return dispatch => {
        //set loading
        axios.get('/restaurantHitList.json')
            .then(res => {
                dispatch(getHitListSuccess(res.data));
            })
            .catch(err => {
                dispatch(getHitListFail());
            })
    }
}

export const saveRestaurantSuccess = (restaurant) => {
    return {
        type: actionTypes.SAVE_RESTAURANT_SUCCESS,
        restaurant: restaurant
    };
};

export const saveRestaurantFail = () => {
    return {
        type: actionTypes.SAVE_RESTAURANT_FAIL
    }
};

export const saveRestaurant = (restaurant) => {
    return dispatch => {
        dispatch(saveRestaurantInit());
        axios.post('/restaurantHitList.json', restaurant)
            .then(res => {
                dispatch(saveRestaurantSuccess(restaurant));
            })
            .catch(err => {
                dispatch(saveRestaurantFail());
            });
    }
}


