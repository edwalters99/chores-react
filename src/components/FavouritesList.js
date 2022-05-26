import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFavourites, reset } from '../features/favourites/favouriteSlice';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

import FavouriteDisplay from './FavouriteDisplay';

function FavouritesList() {
    const { favourites, isLoading, isSuccess, isError, message } = useSelector((state) => state.favourite)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getFavourites());
    },[dispatch]);

    useEffect(() => {  
        if (isSuccess) {
            dispatch(reset());
        };
        if (isError) {
            toast.error(message, { toastId: 'tMessage'});
          };
        dispatch(reset());
    }, [isLoading, isSuccess, isError])


    if (isLoading) {
        return <Spinner />
    };

    if (favourites.length === 0) {
        return (<p className="favlist-heading">No favourite chores yet. Please add one... </p>)
    };

    return (
        <div className="favlist-container">
            { favourites.map((fav) => (
                <FavouriteDisplay fav={ fav } key={ fav._id } />
            )) }
        </div>
  )
};


export default FavouritesList