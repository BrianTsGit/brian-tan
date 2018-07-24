import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    showConceptsGrid: false
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case actionType.OPEN_CONCEPTS_GRID: 
            return updateObject(state, { showConceptsGrid: true });
        case actionType.CLOSE_CONCEPTS_GRID: 
            return updateObject(state, { showConceptsGrid: false });          
        default:
            return state;
    }
    return state;
}

export default store;