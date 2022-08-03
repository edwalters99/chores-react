import React from 'react';

function ChildHomeGreeting({ child }) {
  const greeting = () => {
    const today = new Date();
    const curHr = today.getHours();
    if (curHr < 12) {
      return `Good morning ${child.firstname}!`;
    } else if (curHr < 18) {
      return `Good afternoon ${child.firstname}!`;
    } else {
      return `Good evening ${child.firstname}!`;
    }
  };

  return <h2 className="child-home-greeting"> {greeting()}</h2>;
}

export default ChildHomeGreeting;
