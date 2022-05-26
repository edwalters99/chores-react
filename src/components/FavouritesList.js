import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFavourites, reset } from '../features/favourites/favouriteSlice';
import Spinner from './Spinner';
import coin from '../images/coin.png';

function FavouritesList() {
    const { favourites, isLoading, isSuccess } = useSelector((state) => state.favourite)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getFavourites());
    },[dispatch]);

    useEffect(() => {  
        if (isSuccess) {
            dispatch(reset());
        };
    }, [isLoading, isSuccess])

    const coinDisplay = (value) => {
        if (value == 1)
        return (
            <div className="coin-container"><img className="coin" src={ coin } /></div>
        );
        if (value == 2) {
          return (
            <div className="coin-container"><img className="coin" src={ coin } /><img className="coin" src={ coin } /></div>
          );
        };
        if (value == 3) {
          return (
            <div className="coin-container"><img className="coin" src={ coin } /><img className="coin" src={ coin } /><img className="coin" src={ coin } /></div>
          );
        };
      };



    if (isLoading) {
        return <Spinner />
    };

    if (favourites.length === 0) {
        return (<><p className="favlist-heading">No favourite chores yet. Please add one... </p></>)
    };

    return (
        <div className="favlist-container">
            { favourites.map((fav) => (
                <div className='favlist-cardsmall' key={ fav._id }>
                   <h2>{ fav.title } { fav.icon }</h2>
                   <p></p>
                   <p>{ fav.desc }</p>
                   { coinDisplay(fav.value)}
                   
                  
                </div>
            )) }
        </div>
  )
};


export default FavouritesList