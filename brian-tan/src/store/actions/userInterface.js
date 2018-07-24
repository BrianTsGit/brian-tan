import * as actionTypes from './actionTypes';

export const openConceptsGrid = () => {
    return {
        type: actionTypes.OPEN_CONCEPTS_GRID
    };
}

export const closeConceptsGrid = () => {
    return {
        type: actionTypes.CLOSE_CONCEPTS_GRID
    };
}