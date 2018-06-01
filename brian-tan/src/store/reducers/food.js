import React from 'react';

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    restaurants: []
};

const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
        restaurants: [...state.restaurants]
    };

    switch (action.type) {
        case actionTypes.SEARCH_YELP_SUCCESS:
            newState.restaurants = action.restaurants;
            return newState;
        case actionTypes.SEARCH_YELP_FAIL:
            return state;
        default:
            return state;
    }
};

export default reducer;