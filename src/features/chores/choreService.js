import axios from 'axios';

const SERVER_URL = 'http://localhost:3000'
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
    createChore
};

export default choreService;



