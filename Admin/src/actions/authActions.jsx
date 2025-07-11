import axios from 'axios';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:4040/api/auth/register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response?.data?.error || error.message });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:4040/api/auth/login', userData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response?.data?.error || error.message });
  }
};
