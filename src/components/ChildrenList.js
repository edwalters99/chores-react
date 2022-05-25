import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChildren, reset } from '../features/children/childSlice';
import Spinner from './Spinner';
import ChildCardSm from './ChildCardSm';

function ChildrenList() {
    const { children, isLoading, isSuccess } = useSelector((state) => state.child)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChildren());

        return () => {  // clean up state when component dismounts
            if (isSuccess) {
                dispatch(reset()); 
            }
        }
    },[dispatch]);

    if (isLoading) {
        return <Spinner />
    };

    if (!children) {
        return (<><p>Please add a child...</p></>)
    };

    return (
        <div>
            { children.map((child) => (
                <div className='childcardsmall'>
                <ChildCardSm firstname={child.firstname} dob={child.dob} avatar={child.avatar} color={child.color}/>
                </div>
            )) }
        </div>
  )
};

export default ChildrenList