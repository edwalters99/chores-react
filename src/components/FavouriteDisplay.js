import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import coin from '../images/coin.png';

function FavouriteDisplay({ fav }) {
    // const dispatch = useDispatch();
    const { children } = useSelector((state) => state.child)

    // useEffect(() => {
    //     dispatch(getChildren());
    // },[dispatch]);
    console.log(children)

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

  return (
    <div className='favlist-cardsmall' key={ fav._id }>
        <h2>{ fav.title } { fav.icon }</h2>
        <p>{ fav.desc }</p>
        { coinDisplay(fav.value)}
        <form>
            <input type="text" />
            <button>Assign To Child</button>
        </form>
    </div>
  )
}

export default FavouriteDisplay


