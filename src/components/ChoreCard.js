import React, { useState } from 'react';
import GoldCoins from './GoldCoins';
import TimeAgo from 'react-timeago';
import ParentPinForm from './ParentPinForm';;


function ChoreCard({ chore }) {
    const [done, setDone] = useState(false);
  
  
    return (
        <div className="chore-card" key={chore._id}>
            <h2>{ chore.title }</h2>
            <h3>{ chore.desc }</h3>
            <GoldCoins coins={ chore.value } titleText={ 'Reward' }/>
            <p>Set <TimeAgo date={ chore.createdAt } /></p>
            
        { done ? 
            <ParentPinForm />  
        :
            <button className="btn btn-choredone" onClick={ () => {setDone(true)}}>Done!</button>
        }
        </div>
    )
}

export default ChoreCard;

