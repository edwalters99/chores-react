import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChoresActive, updateChore, reset } from '../features/chores/choreSlice';
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


import ChoreCard from './ChoreCard';
import { combineReducers } from '@reduxjs/toolkit';

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

    const setApproved = (choreId) => {
        const data = {
            choreData: { isApproved: true, isCompleted: true },
            choreId,
            childId
        };
        dispatch(updateChore(data));
    }

    if (isLoading) {
        return (<ClipLoader />)
    };

    if (chores.filter((chore) => !chore.isCompleted && !chore.isApproved ).length === 0) {
        return (
            <div className="chore-display-container">
                <h2>You don't have any chores to do!</h2>
            </div>
        );
    }


    return (
        <div className="chore-display-container">
            <h2>Chores to be done...</h2>
            
            <div>{ chores.map((chore) => {
                    if (chore.isApproved == false & chore.isCompleted === false)
                    return (
                        <ChoreCard chore={ chore } key={ chore._id } setApproved = { setApproved } />
                    );
                })}
            </div>
    
        </div>
      )
}

export default AssignedChores;