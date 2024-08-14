import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

const register = (username, email, password) => {
    return axios.post(API_URL + 'registration/', {
        username,
        email,
        password,
    });
};

const login = (email, password) => {
    return axios.post(API_URL + 'login/', {
        email,
        password,
    });
};

const logout = () => {
    return axios.post(API_URL + 'logout/');
};

export default {
    register,
    login,
    logout,
};

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = 'Token ' + token;
    }
    return config;
 }, (error) => {
    return Promise.reject(error);
 });