import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChildren, reset } from '../features/children/childSlice';
import Spinner from './Spinner';
import ChildCard from './ChildCard';

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

    return (
        <div>
            { children.map((child) => (
                <div className='childcardsmall'>
                <ChildCard firstname={child.firstname} dob={child.dob} avatar={child.avatar} color={child.color}/>
                </div>
            )) }
        </div>
  )
};

export default ChildrenList