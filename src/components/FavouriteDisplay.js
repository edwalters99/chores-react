import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getChildren, reset } from '../features/children/childSlice';
import coin from '../images/coin.png';

function FavouriteDisplay({ fav }) {

    const { children, isLoading, isSuccess, isError, message } = useSelector((state) => state.child)
    const dispatch = useDispatch();
    console.log(children)

    const [selectedChildId, setSelectedChildId] = useState();


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
        dispatch(reset());
    }, [isLoading, isSuccess, isError])

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
          
      };

      const renderChildSelection = () => {
          return (
            <select name="selectedChildId"  className="form-control" value={ selectedChildId } onChange={ onChange }>
             { children.map((child) => (
                <option value={ child._id }>{ child.firstname }</option>
            )) }
           
          </select>
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

export default FavouriteDisplay


