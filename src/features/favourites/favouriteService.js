import axios from 'axios';

const SERVER_URL = 'http://localhost:3000'
const API_URL = SERVER_URL + '/api/favourites/';

// Create new child

const createFavourite = async (favouriteData, token) => {
   
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };
    const response = await axios.post(API_URL, favouriteData, config);

    return response.data;
};
