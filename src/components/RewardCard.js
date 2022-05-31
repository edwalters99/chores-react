import React from 'react'

function RewardCard({ name, cost, image }) {
  return (
    <div>
        <h2>{ name }</h2>
        <h2>{ cost }</h2>
        <h2>{ image }</h2>
    </div>
  )
}

export default RewardCard;