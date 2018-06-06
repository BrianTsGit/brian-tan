import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loadingSearch: false,
    restaurants: [], 
    loadingHitList: false,
    hitList: []
};

//Will need to do this as long as we get from firebase
const formatHitList = (hitList) => {
    return Object.keys(hitList).map(key => {
        return hitList[key];
    });
}

const formatSearchResults = (results) => {
    return results.map(result => {
        return {
            ...result,
            yelp_id: result.id
        };
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_YELP_INIT:
            return updateObject(state, { loadingSearch: true });
        case actionTypes.SEARCH_YELP_SUCCESS:
            return updateObject(state, { loadingSearch: false, businesses: formatSearchResults(action.businesses) });
        case actionTypes.SEARCH_YELP_FAIL:
            return updateObject(state, { loadingSearch: false });
        case actionTypes.GET_HIT_LIST_SUCCESS:
            const hitList = action.hitList ? formatHitList(action.hitList) : [];
            return updateObject(state, { loadingSearch: false, hitList: hitList });
        case actionTypes.HIT_LIST_INIT:
            return updateObject(state, { loadingHitList: true });
        case actionTypes.SAVE_RESTAURANT_SUCCESS:
            const updatedHitList = state.hitList.concat(action.restaurant);
            return updateObject(state, { loadingHitList: false, hitList: updatedHitList });
        case actionTypes.SAVE_RESTAURANT_FAIL:
            return updateObject(state, { loadingHitList: false });
        default:
            return state;
    }
};

export default reducer;