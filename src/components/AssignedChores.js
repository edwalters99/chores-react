import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChoresActive, updateChore, reset as resetChores } from '../features/chores/choreSlice';
import { getChild, updateChild, reset as resetChild } from '../features/children/childSlice';
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


import ChoreCard from './ChoreCard';


function AssignedChores({ childId, setCoinsEarned, setChoresToDo }) {
    const { chores, isLoading : isLoadingChores, isSuccess : isSuccessChores, isError : isErrorChores, message : messageChores } = useSelector((state) => state.chore)

    const { child } = useSelector((state) => state.child)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChoresActive( childId ))
    },[dispatch, childId]);

    useEffect(() => {  
        if (isSuccessChores) {
            dispatch(resetChores());
            setChoresToDo(chores.length); // set state in ChildHome
        };
        if (isErrorChores) {
            toast.error(messageChores, { toastId: 'tMessage'});
          };

    }, [isLoadingChores, isSuccessChores, isErrorChores])

    const setApproved = (choreId, choreRewardValue) => {
        const data = {
            choreData: { 
                isApproved: true, 
                isCompleted: true,
            },
            choreId,
            childId
        };
        dispatch(updateChore(data)); 
        updateChildData(choreRewardValue) 
    };

    const updateChildData = (choreRewardValue) => {
      
        const currentBal = child.rewardbal;
        const currentChoresDone = child.choresdone;
        const newBal = currentBal + choreRewardValue;
        const newChoresDone = currentChoresDone + 1;

        const childData = {
            rewardbal : newBal,
            choresdone: newChoresDone
        };
        dispatch(updateChild({ childData, childId }));
        setCoinsEarned(choreRewardValue); // for congrats message on home page
    };
     

    if (isLoadingChores) {
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
                    if (!chore.isApproved & !chore.isCompleted) 
                    return (
                        <ChoreCard chore={ chore } setApproved={ setApproved } key={ chore._id} />
                    );
                })}
            </div>
    
        </div>
      )
}

export default AssignedChores;