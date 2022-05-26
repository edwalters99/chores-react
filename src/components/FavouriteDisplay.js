import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getChildren, reset } from '../features/children/childSlice';

import coin from '../images/coin.png';
import AssignChoreForm from './AssignChoreForm';
import AssignedList from './AssignedList';
import Spinner from './Spinner';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";



function FavouriteDisplay({ fav }) {

    const { children, isLoading, isSuccess,isError, message} = useSelector((state) => state.child); 

    const [names, setNames] = useState([]);  // Assigned names to display below button

    const dispatch = useDispatch();

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
   
    }, [isLoading, isSuccess, isError])

    const addNameToList = (name) => {
        setNames(prevNames => [...prevNames, name]);
    };
    
    const coinDisplay = (value) => {
        if (value == 1)
        return (
            <div className="coin-container">
                <img className="coin" src={ coin } />
            </div>
        );
        if (value == 2) {
            return (
            <div className="coin-container">
                <img className="coin" src={ coin } />
                <img className="coin" src={ coin } />
            </div>
            );
        };
        if (value == 3) {
            return (
            <div className="coin-container">
                <img className="coin" src={ coin } />
                <img className="coin" src={ coin } />
                <img className="coin" src={ coin } />
            </div>
            );
        };
        };

    if (isLoading) {
        return (
            <ClipLoader />
        );
    }
    return (
        <div className='favlist-cardsmall' key={ fav._id }>
            <h1 className='emoji-lg'>{ fav.icon }</h1>
            <h2>{ fav.title }</h2>
            <p>{ fav.desc }</p>
            
            { coinDisplay(fav.value)}

            <AssignChoreForm children={ children } fav={ fav } addNameToList={ addNameToList }/>
            <AssignedList names={ names }/>
        
        </div>
    )
    }

export default FavouriteDisplay;


