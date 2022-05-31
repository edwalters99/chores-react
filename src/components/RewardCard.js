import React, { useState } from 'react';
import GoldCoins from './GoldCoins';
import ParentPinFormReward from './ParentPinFormReward';

function RewardCard({ name, cost, image, child }) {
    const [claimed, setClaimed] = useState(false);

    const AffordMessage = () => {
        if (child.rewardbal < cost ) {
            return <h2>❌ Sorry { child.firstname } you can't afford this. You need { cost - child.rewardbal } more {cost - child.rewardbal > 1 ? 'coins' : 'coin'}. <br />Keep saving!</h2>
        }
        else {
            return <h2> ✅ You can afford this and will have { child.rewardbal - cost } { child.rewardbal - cost > 1 ? 'coins' : 'coin' } left.</h2>
        }
    };

    const isAffordable = () => {
        return child.rewardbal >= cost;
    };

    const buttonPinFormRender = () => {
        if (claimed) {
            return (
                <ParentPinFormReward setClaimed={ (bool) => setClaimed(bool)}/>
            )
        }
        else {
            return  (
                <button className="btn btn-choredone" onClick={ () => setClaimed( true) }>Claim!</button>
            )
        }
    };
  
    return (
    <div className="reward-card">
        <h2 onClick={ () => setClaimed(false) }>{ name }</h2>
        <img src={ image } onClick={ () => setClaimed(false) }/>
        <GoldCoins coins={ cost } titleText={ 'Cost' } />
        <div onClick={ () => setClaimed(false) }>
            { AffordMessage() }
        </div>
        { isAffordable() && buttonPinFormRender() }
    </div>
  )
}

export default RewardCard;