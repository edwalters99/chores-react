import React from "react";

function ChoresTotalCompleted({ number }) {
  if (number > 20) {
    return (
      <div className="chore-total-container">
        <h1>WOW! Keep up the amazing work!</h1>
        <h1>{number} Completed Chores</h1>
      </div>
    );
  } else if (number > 15) {
    return (
      <div className="chore-total-container">
        <h1>You're on fire!</h1>
        <h1>{number} Completed Chores</h1>
      </div>
    );
  } else if (number > 10) {
    return (
      <div className="chore-total-container">
        <h1>You're doing amazing!</h1>
        <h1>{number} Completed Chores</h1>
      </div>
    );
  } else if (number > 5) {
    return (
      <div className="chore-total-container">
        <h1>You're doing great!</h1>
        <h1>{number} Completed Chores</h1>
      </div>
    );
  } else if (number === 1) {
    return (
      <div className="chore-total-container">
        <h1>You're doing great!</h1>
        <h1>{number} Completed Chore</h1>
      </div>
    );
  } else {
    return (
      <div className="chore-total-container">
        <h1>You're making great progress!</h1>
        <h1>{number} Completed Chores</h1>
      </div>
    );
  }
}

export default ChoresTotalCompleted;
