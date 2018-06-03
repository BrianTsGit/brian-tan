import axiosYelp from '../../axios/axios-yelp';
import axiosFireBase from '../../axios/axios-fire-base';

import * as actionTypes from './actionTypes';

export const searchYelpInit = () => {
    return {
        type: actionTypes.SEARCH_YELP_INIT
    };
};

export const searchYelpSuccess = (businesses) => {
    return {
        type: actionTypes.SEARCH_YELP_SUCCESS,
        businesses: businesses
    };
}

export const searchYelpFail = () => {
    return {
        type: actionTypes.SEARCH_YELP_FAIL
    };
}

export const searchYelp = (term, loc) => {
    term = encodeURI(term);
    loc = encodeURI(loc);

    return dispatch => {
        dispatch(searchYelpInit());
        axiosYelp.get('/businesses/search?term=' + term + '&location=' + loc)
            .then(res => {
                dispatch(searchYelpSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(searchYelpFail());
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
        axiosFireBase.get('/restaurantHitList.json')
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
        axiosFireBase.post('/restaurantHitList.json', restaurant)
            .then(res => {
                dispatch(saveRestaurantSuccess(restaurant));
            })
            .catch(err => {
                dispatch(saveRestaurantFail());
            });
    }
}


