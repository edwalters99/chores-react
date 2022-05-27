import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const API_URL = SERVER_URL + '/api/children/';

// Get Child's chores

const getChores = async(childId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`,
        },
    };

    const response = await axios.get(API_URL + childId + '/chores', config);

    return response.data;

}

// Get Child's chores - Active Only

const getChoresActive = async(childId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`,
        },
    };

    const response = await axios.get(API_URL + childId + '/chores/active', config);

    return response.data;

}
// Create Child's chore

const createChore = async(choreData, childId, token) => {
    console.log(choreData, childId, token)
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`,
        },
    };

    const response = await axios.post(API_URL + childId + '/chores', choreData, config);

    return response.data;

}

const choreService = {
    getChores,
    getChoresActive,
    createChore
};

export default choreService;



