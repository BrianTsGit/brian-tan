import axiosServer from '../../axios/axios-server';

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
        axiosServer.get('/api/yelp/businesses/search?term=' + term + '&location=' + loc)
            .then(res => {
                dispatch(searchYelpSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(searchYelpFail());
            });
    }
}

export const getHitListInit = () => {
    return {
        type: actionTypes.GET_HIT_LIST_INIT
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
        dispatch(getHitListInit());
        axiosServer.get('/api/food/yelpBusinesses')
            .then(res => {
                dispatch(getHitListSuccess(res.data));
            })
            .catch(err => {
                dispatch(getHitListFail());
            })
    }
}

export const saveRestaurantInit = () => {
    return {
        type: actionTypes.SAVE_BUSINESS_INIT
    };
};

export const saveBusinessSuccess = (business) => {
    return {
        type: actionTypes.SAVE_BUSINESS_SUCCESS,
        restaurant: business
    };
};

export const saveBusinessFail = () => {
    return {
        type: actionTypes.SAVE_BUSINESS_FAIL
    }
};

export const saveBusiness = (business) => {
    return dispatch => {
        dispatch(saveRestaurantInit());
        axiosServer.post('/api/food/yelpBusinesses', business)
            .then(res => {
                dispatch(saveBusinessSuccess(business));
            })
            .catch(err => {
                dispatch(saveBusinessFail());
            });
    }
}

export const deleteBusinessInit = () => {
    return {
        type: actionTypes.DELETE_BUSINESS_INIT
    };
};

export const deleteBusinessSuccess = (yelpId) => {
    return {
        type: actionTypes.DELETE_BUSINESS_SUCCESS,
        yelp_id: yelpId
    };
};

export const deleteBusinessFail = () => {
    return {
        type: actionTypes.DELETE_BUSINESS_FAIL
    };
};

export const deleteBusiness = (yelpId) => {
    return dispatch => {
        dispatch(deleteBusinessInit());
        axiosServer.delete('/api/food/yelpBusinesses?yelpId=' + yelpId)
            .then(res => {
                dispatch(deleteBusinessSuccess(yelpId));
            })
            .catch(err => {
                dispatch(deleteBusinessFail());
            });
    };
};


