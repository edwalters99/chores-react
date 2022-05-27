import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChoresActive, reset } from '../features/chores/choreSlice';
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import ChildDelete from './ChildDelete';


function AssignedChores({ childId }) {
    const { chores, isLoading, isSuccess, isError, message } = useSelector((state) => state.chore)
    const dispatch = useDispatch();

    console.log(chores)

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

    if (isLoading) {
        return (<ClipLoader />)
    };

if (isSuccess) {
    return (
        <div>
        {console.log(chores)}
       
        </div>
    )


}


}

export default AssignedChores;