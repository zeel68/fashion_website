import { create } from 'zustand'

const Store = create((set) => ({
  user: null,
  token: null,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),

  logout: () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
    set({ user: null, token: null });
  },
}));

export default Store;




