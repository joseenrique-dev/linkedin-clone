import { loginActionTypes } from '../actions/user.action';
const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginActionTypes.SIGNOUT_USER :
      return {
        ...state,
        user:null
      }
    case loginActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
