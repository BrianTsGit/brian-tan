import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loadingSearch: false,
    restaurants: [],
    loadingHitList: false,
    hitList: []
};

const formatYelpSearch = (restaurants) => {
    //NOTE WHEN I GET NODE JS I SHOULD BE TRANSFORMING THE DATA  THERE
    //note this formatting is unique to how i set up the data in firebase
    //it will be different when calling from Yelp Fusion

    //NOTE there is a way to read objects as an array through firebase!
    //https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html
    const formattedData = Object.keys(restaurants).map(key => {
        const categoriesArray = Object.keys(restaurants[key].categories).map(catKey => {
            return restaurants[key].categories[catKey];
        })

        const formattedCategories = categoriesArray.map(cat => {
            return cat.title;
        }).join(', ');

        return {
            ...restaurants[key],
            id: key,
            categories: formattedCategories
        };
    });

    return formattedData;
}

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
            newState.restaurants = formatYelpSearch(action.restaurants);
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