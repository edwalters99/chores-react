import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteChild, getChildren, reset } from '../features/children/childSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function ChildDelete({ childId, childName }) {
    const { isLoading, isSuccess, isError, message } = useSelector((state) => state.child)
    
    const dispatch = useDispatch();

    useEffect(() => {  
        if (isSuccess) {
            dispatch(reset());
        };
        if (isError) {
            toast.error(message, { toastId: 'tMessage'});
          };
       
    }, [isLoading, isSuccess, isError]);

     
    const onClick = (e) => {
        confirmAlert({
            title: `Confirm Delete Child: ${ childName }`,
            message: 'Are you sure?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    dispatch(deleteChild(childId));
                }
              },
              {
                label: 'No',
                onClick: () => {return}
              }
            ]
          });
    };

    if (isLoading) {
        return (<ClipLoader />)
    };

    return (
        <div>
            <button onClick={ onClick }className="btn btn-sm btn-center">Delete</button>
        </div>
    )
}

export default ChildDelete;