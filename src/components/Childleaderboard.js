import React from 'react';
import { nanoid } from '@reduxjs/toolkit';



function Childleaderboard({ child, children, familyname }) {
//   const childrenSorted = children.sort((a,b) => a.choresdone - b.choresdone)
  
  
    const leaderboard = () => {
      return (
          children.map((mapchild) => {
              return (
                <div className="leaderboard-card" key={ mapchild._id } >
                    { mapchild._id === child._id ? <h1>*** { mapchild.firstname } *** </h1> : <h2> { mapchild.firstname }</h2>}
                    <h3>Chores: { mapchild.choresdone }</h3>
                    <h3>Coins: { mapchild.rewardbal }</h3>
                </div>
              )
          })
      );
  };


  
    if (children.length > 1) {
      return (
      <div className="leaderboard-container">
          <h1 className="leaderboard-header">{ familyname } Leaderboard</h1>
          { leaderboard() }


    </div>
    )}

    return 
    <></>
}

export default Childleaderboard;