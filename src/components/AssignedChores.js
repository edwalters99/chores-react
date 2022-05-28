import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChoresActive, reset } from '../features/chores/choreSlice';
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


import ChoreCard from './ChoreCard';

function AssignedChores({ childId }) {
    const { chores, isLoading, isSuccess, isError, message } = useSelector((state) => state.chore)
    const dispatch = useDispatch();

  
    
    useEffect(() => {
        dispatch(getChoresActive( childId ))
    },[dispatch]);

    useEffect(() => {  
        if (isSuccess) {
            dispatch(reset());
        };
        if (isError) {
            toast.error(message, { toastId: 'tMessage'});
          };

    }, [isLoading, isSuccess, isError])

    const date = new Date(Date.now())


    if (isLoading) {
        return (<ClipLoader />)
    };

    if (chores.length === 0) {
        return (
            <div className="chore-display-container">
                <h2>Well done you don't have any chores to do!</h2>
            </div>
        );
    }

    return (
    <div className="chore-display-container">
        <h2>Chores to be done...</h2>
        
        <div>{ chores.map((chore) => {
                return (
                    <ChoreCard chore={ chore } key={ chore._id } />
                );
            })}
        </div>

    </div>
  )

}

export default AssignedChores;