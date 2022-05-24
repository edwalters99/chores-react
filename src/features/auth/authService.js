// functions in this file perform the actions required e.g. call the API, delete token from localStorage

import axios from 'axios';

const API_URL = '/api/users';

const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data; 
    // user data and token
};

const logout = () => localStorage.removeItem('user');

const authService = {
    register,
    logout
};

export default authService;