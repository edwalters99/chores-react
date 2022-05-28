import React from 'react'
import coin from '../images/coin.png';
import { nanoid } from 'nanoid';

function GoldCoins( props ) {
  
    const coins = (number) => {
    const output = [];
    for (let i = 0; i < number; i++ ) {
        output.push(<img src={ coin } key={ nanoid() } className="gold-coin"/>)
      };
    return output
  };
  
   // titleText: 'Reward' - AssignedChores or 'Your Coin Bank' - ChildHome
return (
    <div className="gold-coin-container">
        <p>{ props.titleText } ({ props.coins }):</p> 
        <div key={ nanoid() }> {coins(props.coins)} </div>
    </div>
  )
}

export default GoldCoins;