import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loadingSearch: false,
    restaurants: [],
    loadingHitList: false,
    hitList: []
};

const formatHitList = (hitList) => {
    return Object.keys(hitList).map(key => {
        return hitList[key];
    });
}

const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
        restaurants: [...state.restaurants],
        hitList: [...state.hitList]
    };

    switch (action.type) {
        case actionTypes.SEARCH_YELP_INIT:
            newState.loadingSearch = true;
            return newState;
        case actionTypes.SEARCH_YELP_SUCCESS:
            newState.loadingSearch = false;
            newState.restaurants = action.businesses;
            return newState;
        case actionTypes.SEARCH_YELP_FAIL:
            newState.loadingSearch = false;
            return newState;
        case actionTypes.GET_HIT_LIST_SUCCESS:
            newState.loadingHitList = false;
            newState.hitList = action.hitList ? formatHitList(action.hitList) : [];
            return newState;
        case actionTypes.HIT_LIST_INIT:
            newState.loadingHitList = true;
            return newState;
        case actionTypes.SAVE_RESTAURANT_SUCCESS:
            newState.loadingHitList = false;
            newState.hitList = newState.hitList.concat(action.restaurant);
            return newState;
        case actionTypes.SAVE_RESTAURANT_FAIL:
            newState.loadingHitList = false;
            return newState; 
        default:
            return state;
    }
};

export default reducer;