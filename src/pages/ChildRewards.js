import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import  { FaArrowCircleLeft }  from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getChild, getChildren, reset } from '../features/children/childSlice';
import GoldCoins from '../components/GoldCoins';


function ChildRewards() {
    const childId = JSON.parse(localStorage.getItem('childAuth')); // logged in Child

    const dispatch = useDispatch();

    const { child, children, isLoading, isSuccess, isError, message } = useSelector((state) => state.child);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        };
        dispatch(getChild(childId));
        dispatch(getChildren());
    }, [childId, isError, message]);
  

    if (child.rewardbal === 0) {
        return (
            <div className="rewards-container">
         <Link to= "/childhome" className='btn childrewards-back-btn'>
            <FaArrowCircleLeft/> Back to Dashboard
        </Link>
            <h1>Sorry you don't have any coins yet! Come back when you've completed some chores.</h1>
        </div>
        );
    };
  
    return (
    <div className="rewards-container">
         <Link to= "/childhome" className='btn childrewards-back-btn'>
            <FaArrowCircleLeft/> Back to Dashboard
        </Link>
       
        <GoldCoins coins={ child.rewardbal } titleText={ 'Your Coin Bank' } />
        <h1>Let's help you spend those Shiny Gold Coins...</h1>
           
            
       


  
    </div>
  )
}

export default ChildRewards;