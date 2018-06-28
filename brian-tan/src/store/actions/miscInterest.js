import axiosServer from '../../axios/axios-server';

import * as actionTypes from './actionTypes';

export const getMiscInterestsInit = () => {
    return {
        type: actionTypes.GET_MISC_INTERESTS_INIT
    };
};

export const getMiscInterestsSuccess = (interests) => {
    return {
        type: actionTypes.GET_MISC_INTERESTS_SUCCESS,
        miscInterests: interests
    };
};

export const getMiscInterestsFail = () => {
    return {
        type: actionTypes.GET_MISC_INTERESTS_FAIL
    };
};

export const getMiscInterests = () => {
    return dispatch => {
        dispatch(getMiscInterestsInit());
        axiosServer.get('/api/misc/miscInterests')
            .then(res => {
                dispatch(getMiscInterestsSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(getMiscInterestsFail());
            });
    }
}