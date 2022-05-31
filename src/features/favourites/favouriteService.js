import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const API_URL = SERVER_URL + "/api/favourites/";

// Create new favourite
const createFavourite = async (favouriteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, favouriteData, config);
  return response.data;
};

// Get user favourites
const getFavourites = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

// Delete Favourite
const deleteFavourite = async (favId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + favId, config);
  return response.data;
};

const favouriteService = {
  createFavourite,
  getFavourites,
  deleteFavourite,
};

export default favouriteService;
