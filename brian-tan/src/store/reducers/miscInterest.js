import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loadingMiscInterests: false,
    miscInterests: []
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_MISC_INTERESTS_INIT:
            return updateObject(state, { loadingMiscInterests: true });
        case actionType.GET_MISC_INTERESTS_SUCCESS:
            return updateObject(state, { loadingMiscInterests: false, miscInterests: action.miscInterests });
        case actionType.GET_MISC_INTERESTS_FAIL:
            return updateObject(state, { loadingMiscInterests: false});
        default: 
            return state;
    }
}

export default store;