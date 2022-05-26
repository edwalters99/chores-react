import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChildren, reset } from '../features/children/childSlice';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
import ChildCardSm from './ChildCardSm';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


function ChildrenList() {
    const { children, isLoading, isSuccess, isError, message } = useSelector((state) => state.child)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChildren());
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

    if (!children && !isLoading) {
        return (<><p>Please add a child...</p></>)
    };

    return (
        <div>
            { children.map((child) => (
                <div className='childcardsmall' key={ child._id }>
                    <ChildCardSm firstname={ child.firstname } dob={ child.dob } avatar={ child.avatar } color={ child.color }/>
                </div>
            )) }
        </div>
  )
};

export default ChildrenList;