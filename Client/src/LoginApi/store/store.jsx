import { create } from 'zustand';
import axios from 'axios';

export const BASE_URL = 'https://dhaneri-backend.vercel.app/api';
export const STORE_ID = '6874da6ef34b88733c0b452c';

const store = create((set) => ({
  user: null,
  error: null,
  registered: false,
  message: null,

  login: async ({ email, password }) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, { email, password });
      console.log(res.data.data.user);

      const userData = {
        name: res.data.data.user.name,
        email: res.data.data.user.email,
        token: res.data.data.accessToken,
        userId: res.data.data.user._id
      };

      localStorage.setItem('name', userData.name);
      localStorage.setItem('email', userData.email);
      localStorage.setItem('access_token', userData.token);
      localStorage.setItem('user_id', userData.userId);

      console.log("token:", localStorage.getItem('access_token'));

      set({ user: res.data.data.user, error: null });
      return { success: true };
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      set({ error: err.response?.data?.error || err.message, user: null });
      return { success: false, message: err.response?.data?.error || err.message };
    }
  },

  signup: async (formData) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/register`, formData);
      console.log("Registration success:", res.data);
      set({ registered: true, error: null });
      return { success: true };
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      set({ error: err.response?.data?.error || err.message });
      return { success: false, message: err.response?.data?.error || err.message };
    }
  },

  forgot: async (email) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/forgot-password`, { email });
      console.log(res.data);
      alert(res.data.message);
      return true;
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.error || 'Failed to send OTP');
      return false;
    }
  },

  logout: async () => {
    try {
      await axios.post(`${BASE_URL}/api/auth/logout`);
      set({ user: null });
      localStorage.removeItem('access_token');
      console.log('Logged out');
    } catch (err) {
      console.log(err);
      alert('Failed to logout');
    }
  },

  resetStatus: () => {
    set({ registered: false });
  },
}));

export default store;
