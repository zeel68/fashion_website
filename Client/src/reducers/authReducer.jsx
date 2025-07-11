import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/authActions';

const initialState = {
  user: null,
  error: null,
  registered: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registered: true,
        error: null
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: null, error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
