import React from 'react';
import RewardCard from './RewardCard';

function RewardList({ rewards, child, updateChildBalance }) {
  const rewardsSorted = rewards.slice().sort((a, b) => a.cost - b.cost); // sort by cheapest to most expensive

  return (
    <div className="reward-list-container">
      {rewardsSorted.map((reward) => {
        return (
          <RewardCard
            key={reward.name}
            name={reward.name}
            cost={reward.cost}
            image={reward.image}
            child={child}
            updateChildBalance={updateChildBalance}
          />
        );
      })}
    </div>
  );
}

export default RewardList;
