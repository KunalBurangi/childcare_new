import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
<<<<<<< HEAD
    debugger;
=======
>>>>>>> 9aabf6880920dc13c5c1d705e212bf09c39a7ad8
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}