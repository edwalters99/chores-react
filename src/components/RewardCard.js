import React, { useState } from 'react';
import GoldCoins from './GoldCoins';

function RewardCard({ name, cost, image, child }) {
    const [claimed, setClaimed] = useState(false);

    const AffordMessage = () => {
        if (child.rewardbal < cost ) {
            return <h2>❌ Sorry { child.firstname } you can't afford this. You need { cost - child.rewardbal } more coins. <br />Keep saving!</h2>
        }
        else {
            return <h2> ✅ You can afford this and will have { child.rewardbal - cost } coins left.</h2>
        }
    };

    const isAffordable = () => {
        return child.rewardbal >= cost;
    };
  
    return (
    <div className="reward-card">
        <h2>{ name }</h2>
        <GoldCoins coins={ cost } titleText={ 'Cost' }/>
        <img src={ image } />
        { AffordMessage() }
        { isAffordable() && <button className="btn btn-choredone" onClick={ () => setClaimed( true) }>Claim!</button>
      
        }
    </div>
  )
}

export default RewardCard;