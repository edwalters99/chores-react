import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChoresActive, reset } from '../features/chores/choreSlice';
import { toast } from 'react-toastify';
import GoldCoins from './GoldCoins';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import TimeAgo from 'react-timeago';
import ChoreDoneButton from './ChoreDoneButton';



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
                   <div className="chore-card" key={chore._id}>
                        <h2>{ chore.title }</h2>
                        <h3>{ chore.desc }</h3>
                        <GoldCoins coins={ chore.value } titleText={ 'Reward' }/>
                        <p>Set <TimeAgo date={ chore.createdAt } /></p>
                        <ChoreDoneButton />
                   </div>
                );
            })}
        </div>
    </div>
  )





}

export default AssignedChores;