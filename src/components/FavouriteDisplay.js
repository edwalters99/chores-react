import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getChildren, reset } from '../features/children/childSlice';

import coin from '../images/coin.png';
import AssignChoreForm from './AssignChoreForm';

function FavouriteDisplay({ fav }) {

    const { children, isLoading, isSuccess,isError, message} = useSelector((state) => state.child); 


    const dispatch = useDispatch();
    console.log(children)


    useEffect(() => {
        dispatch(getChildren());
    },[dispatch]);

  
    useEffect(() => {  
        if (isSuccess) {
            dispatch(reset());
        };
        if (isError) {
            toast.error(message, { toastId: 'tmess'});
          };
        dispatch(reset());
    }, [isLoading, isSuccess, isError])
    


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

      
  return (
    <div className='favlist-cardsmall' key={ fav._id }>
        <h2>{ fav.title } { fav.icon }</h2>
        <p>{ fav.desc }</p>
        { coinDisplay(fav.value)}

       <AssignChoreForm children={ children } fav={ fav }/>
      
    </div>
  )
}

export default FavouriteDisplay;


