import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loadingSearch: false,
    businesses: [], 
    loadingHitList: false,
    hitList: [],
    loadingTopRestaurants: false,
    topRestaurants: []
};

//Will need to do this as long as we get from firebase
const formatHitList = (hitList) => {
    return Object.keys(hitList).map(key => {
        return hitList[key];
    });
}

const formatSearchResults = (results) => {
    if (results.length) {
        return results.map(result => {
            return {
                ...result,
                yelp_id: result.id
            };
        });
    } else {
        return [];
    }
}

const filterOutByProperties = (arrayToFilter, arrayToCompare, propertyName) => {
    const propertyValuesArray = {};
    for (let item of arrayToCompare) {
        propertyValuesArray[item[propertyName]] = true;
    }
    return arrayToFilter.filter(item => !propertyValuesArray[item[propertyName]]);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_YELP_INIT:
            return updateObject(state, { loadingSearch: true });
        case actionTypes.SEARCH_YELP_SUCCESS:
            const searchResults = formatSearchResults(action.businesses);
            const filteredSearchResults = filterOutByProperties(searchResults, state.hitList, 'yelp_id');
            return updateObject(state, { loadingSearch: false, businesses: filteredSearchResults });
        case actionTypes.SEARCH_YELP_FAIL:
            return updateObject(state, { loadingSearch: false });
        case actionTypes.GET_HIT_LIST_SUCCESS:
            const hitList = action.hitList ? formatHitList(action.hitList) : [];
            return updateObject(state, { loadingHitList: false, hitList: hitList });
        case actionTypes.GET_HITLIST_FAIL:
            return updateObject(state, { loadingHitList: false });
        case actionTypes.GET_HIT_LIST_INIT:
            return updateObject(state, { loadingHitList: true });
        case actionTypes.SAVE_BUSINESS_INIT:
            return updateObject(state, { loadingHitList: true, loadingSearch: true });
        case actionTypes.SAVE_BUSINESS_SUCCESS:
            const updatedHitList = state.hitList.concat(action.restaurant);
            const updatedBusinesses = state.businesses.filter(b => b.yelp_id !== action.restaurant.yelp_id);
            return updateObject(state, { loadingHitList: false, loadingSearch: false, businesses: updatedBusinesses, hitList: updatedHitList });
        case actionTypes.SAVE_BUSINESS_FAIL:
            return updateObject(state, { loadingHitList: false, loadingSearch: false });
        case actionTypes.DELETE_BUSINESS_INIT:
            return updateObject(state, { loadingHitList: true });
        case actionTypes.DELETE_BUSINESS_SUCCESS:
            const newHitList = state.hitList.filter(item => item.yelp_id !== action.yelp_id);
            return updateObject(state, { loadingHitList: false, hitList: newHitList });
        case actionTypes.DELETE_BUSINESS_FAIL:
            return updateObject(state, { loadingHitList: false });
        case actionTypes.GET_TOP_RESTAURANTS_INIT:
            return updateObject(state, { loadingTopRestaurants: true });
        case actionTypes.GET_TOP_RESTAURANTS_SUCCESS:
            return updateObject(state, { loadingTopRestaurants: false, topRestaurants: action.topRestaurants });
        case actionTypes.GET_TOP_RESTAURANTS_FAIL:
            return updateObject(state, { loadingTopRestaurants: false });
        default:
            return state;
    }
};

export default reducer;