import { alertConstants } from '../_constants';

export function alert(state = {}, action) {
<<<<<<< HEAD
  debugger;
=======
>>>>>>> 9aabf6880920dc13c5c1d705e212bf09c39a7ad8
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}