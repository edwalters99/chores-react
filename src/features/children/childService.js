import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const API_URL = SERVER_URL + '/api/children/';

// Create new child

const createChild = async (childData, token) => {
   
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };
    const response = await axios.post(API_URL, childData, config);

    return response.data;
};


// Get user's children

const getChildren = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };
    const response = await axios.get(API_URL, config);

    return response.data;
};

// Get user child (single)

const getChild = async (childId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };
    const response = await axios.get(API_URL + childId, config);

    return response.data;
};

// Update Child Data
const updateChild = async(childData, childId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`,
        },
    };

    const response = await axios.put(API_URL + childId, childData, config);

    return response.data;

};


// Delete Child
const deleteChild = async (childId, token) => {
   
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };
    const response = await axios.delete(API_URL + childId, config);

    return response.data;
};

const childService = {
    createChild,
    getChildren,
    getChild,
    updateChild,
    deleteChild
};

export default childService;