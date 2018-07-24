import * as actionTypes from './actionTypes';

export const openConceptGrid = () => {
    return {
        type: actionTypes.OPEN_CONCEPT_GRID
    };
}

export const closeConceptGrid = () => {
    return {
        type: actionTypes.CLOSE_CONCEPT_GRID
    };
}