import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getChildren, reset as resetChild } from '../features/children/childSlice';
import { createChore, reset as resetChore } from '../features/chores/choreSlice';
import coin from '../images/coin.png';

function FavouriteDisplay({ fav }) {

    const { 
        children, 
        isLoading : isloadingChildren, 
        isSuccess : isSuccessChildren, 
        isError : isErrorChildren, 
        message : messageChildren 
    } = useSelector((state) => state.child); // need to change variable names to avoid clash with chore state
    const { 
        isLoading : isloadingChore, 
        isSuccess : isSuccessChore, 
        isError : isErrorChore, 
        message : messageChore 
    } = useSelector((state) => state.chore);

    

    const dispatch = useDispatch();
    console.log(children)

    const [selectedChildId, setSelectedChildId] = useState();


    useEffect(() => {
        dispatch(getChildren());
    },[dispatch]);

    // errors - get children
    useEffect(() => {  
        if (isSuccessChildren) {
            dispatch(resetChild());
        };
        if (isErrorChildren) {
            toast.error(messageChildren, { toastId: 'ChildMessage'});
          };
        dispatch(resetChild());
    }, [isloadingChildren, isSuccessChildren, isErrorChildren])
    
    // errors - create chore
    useEffect(() => {  
        if (isSuccessChore) {
            // dispatch(resetChore());
            console.log('success')
        };
        if (isErrorChore) {
            toast.error(messageChore, { toastId: 'ChoreMessage'});
          };
          dispatch(resetChore());
      
    }, [isloadingChore, isSuccessChore, isErrorChore])

    const coinDisplay = (value) => {
        if (value == 1)
        return (
            <div className="coin-container"><img className="coin" src={ coin } /></div>
        );
        if (value == 2) {
          return (
            <div className="coin-container"><img className="coin" src={ coin } /><img className="coin" src={ coin } /></div>
          );
        };
        if (value == 3) {
          return (
            <div className="coin-container"><img className="coin" src={ coin } /><img className="coin" src={ coin } /><img className="coin" src={ coin } /></div>
          );
        };
      };

      const onChange = (e) => {
          setSelectedChildId(e.target.value);
      };

      const onSubmit = (e) => {
          e.preventDefault();
          const choreData = {
              title: fav.title,
              desc: fav.desc,
              value: fav.value,
              icon: fav.icon
          };
          dispatch(createChore({choreData : choreData, childId : selectedChildId })) 
      };

      const renderChildSelection = () => {
          return (
            <select name="selectedChildId"  className="form-control" value={ selectedChildId + 2 } onChange={ onChange }>
                { children.map((child) => (
                    <option value={ child._id }>{ child.firstname }</option>
                )) }
          </select>
          )
      }

      if (isSuccessChore) {
          return (
              <h1>Success</h1>
          )
      }
  return (
    <div className='favlist-cardsmall' key={ fav._id }>
        <h2>{ fav.title } { fav.icon }</h2>
        <p>{ fav.desc }</p>
        { coinDisplay(fav.value)}
        <form onSubmit={ onSubmit }>
        <div className="form-group">
           { renderChildSelection() }
        </div>
            <button>Assign To Child</button>
        </form>
    </div>
  )
}

export default FavouriteDisplay;


