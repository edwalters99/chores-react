import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFavourites, reset } from '../features/favourites/favouriteSlice';
import Spinner from './Spinner';

function FavouritesList() {
    const { favourites, isLoading, isSuccess } = useSelector((state) => state.favourite)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavourites());
        console.log(favourites)
    },[dispatch]);



    if (isLoading) {
        return <Spinner />
    };

    if (!favourites) {
        return (<><p>Please add a favourite...</p></>)
    };

    return (
        <div>
            { favourites.map((fav) => (
                <div className='' key={ fav._id }>
                   <p>{ fav.title }</p>
                   <p>{ fav.desc }</p>
                   <p>{ fav.value }</p>
                   <p>{ fav.icon }</p>
                </div>
            )) }
        </div>
  )
};


export default FavouritesList