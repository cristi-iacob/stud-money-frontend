export const getToken = () => localStorage.getItem('Token');

export const setToken = (token) => localStorage.setItem('Token', token);

export const removeToken = () => localStorage.removeItem('Token');