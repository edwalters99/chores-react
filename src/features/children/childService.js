import axios from 'axios';

const SERVER_URL = 'http://localhost:3000'
const API_URL = SERVER_URL + '/api/children/';

// Create new child

const createChild = async (childData, token) => {
   
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.post(API_URL, childData, config);

    return response.data;
};


// Get user children

const getChildren = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.get(API_URL, config);

    return response.data;
};

const childService = {
    createChild,
    getChildren
};

export default childService;