import { create } from 'zustand';
import axios from 'axios';

const store = create(

  (set) => ({
    user: null,
    error: null,
    registered: false,
    message: null,

    register: async (formData) => {
      try {
        console.log("Registering with", formData);
        const res = await axios.post('http://65.1.3.198:5050/api/auth/register', formData);
        console.log("Registration success:", res.data);
        set({ registered: true, error: null });
      } catch (err) {
        console.error("Registration error:", err.response?.data || err.message);
        set({ error: err.response?.data?.error || err.message });
      }
    },


    login: async ({ email, password }) => {
      try {

        const res = await axios.post('http://65.1.3.198:5050/api/auth/login', { email, password });
        console.log(res.data.data.user.name);
        console.log(res.data.data.user.email);
        console.log(res.data.data.user.token);


        const userData = {
          name: res.data.data.user.name,
          email: res.data.data.user.email,
          token: res.data.data.user.token
        };

        localStorage.setItem('name', userData.name);
        localStorage.setItem('email', userData.email);

        set({ user: res.data.data.user, error: null });
      } catch (err) {
        set({ error: err.response?.data?.error || err.message, user: null });
      }
    },



    forgot: async (email) => {
      try {
        const res = await axios.post('http://65.1.3.198:5050/api/auth/forgot-password', { email });
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
        await axios.post('http://65.1.3.198:5050/api/auth/logout');
        set({ user: null });
        localStorage.removeItem('user');
        console.log('Logged out');
      } catch (err) {
        console.log(err);
        alert('Failed to logout');
      }
    },

    resetStatus: () => {
      set({ registered: false });
    },
  }),

);

export default store;