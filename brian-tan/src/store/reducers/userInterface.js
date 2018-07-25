import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    showConceptGrid: false
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case actionType.OPEN_CONCEPT_GRID: 
            return updateObject(state, { showConceptGrid: true });
        case actionType.CLOSE_CONCEPT_GRID: 
            return updateObject(state, { showConceptGrid: false });          
        default:
            return state;
    }
    return state;
}

export default store;