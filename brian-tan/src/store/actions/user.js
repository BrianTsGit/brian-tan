import axiosServer from '../../axios/axios-server';

import * as actionTypes from './actionTypes';

export const googleSignInSuccess = () => {
    return {
        type: actionTypes.GOOGLE_SIGN_IN_SUCCESS
    };
};

export const googleSignInFail = () => {
    return {
        type: actionTypes.GOOGLE_SIGN_IN_FAIL
    };
};

export const googleSignIn = () => {
    return dispatch => {
        axiosServer.get('/auth/google')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
}