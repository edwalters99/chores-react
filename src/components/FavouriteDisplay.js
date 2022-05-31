import React, { useState } from 'react'
import AssignChoreForm from './AssignChoreForm';
import AssignedList from './AssignedList';
import FavouriteDelete from './FavouriteDelete';
import coin from '../images/coin.png';




function FavouriteDisplay({ fav, children }) {

    const [names, setNames] = useState([]);  // Assigned names to display below button

    const addNameToList = (name) => {
        setNames(prevNames => [...prevNames, name]);
    };
    
    const coinDisplay = (value) => {
        if (value == 1)
        return (
            <div className="coin-container">
                <img className="coin" src={ coin } />
            </div>
        );
        if (value == 2) {
            return (
            <div className="coin-container">
                <img className="coin" src={ coin } />
                <img className="coin" src={ coin } />
            </div>
            );
        };
        if (value == 3) {
            return (
            <div className="coin-container">
                <img className="coin" src={ coin } />
                <img className="coin" src={ coin } />
                <img className="coin" src={ coin } />
            </div>
            );
        };
        };

    
    return (
        <div className='favlist-cardsmall' key={ fav._id }>
            <h1 className='emoji-lg'>{ fav.icon }</h1>
            <h2>{ fav.title }</h2>
            <p>{ fav.desc }</p>
            
            { coinDisplay(fav.value)}
           
            <AssignChoreForm children={ children } fav={ fav } addNameToList={ addNameToList }/>
            <AssignedList names={ names } />
            <FavouriteDelete favId={ fav._id } favTitle={ fav.title }/>
        </div>
    )
    }

export default FavouriteDisplay;


