import React, { useState } from "react";

function ChildHomeRandomMessage({ child, setIsBirthday }) {
  const makeBackwardsName = () => {
    return child.firstname.split("").reverse().join("").toLowerCase();
  };

  const makeAvatarName = () => {
    const string = child.avatar;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const calculateDaysToBirthday = () => {
    let today = new Date();
    let bday = new Date(child.dob);

    let upcomingBday = new Date(
      today.getFullYear(),
      bday.getMonth(),
      bday.getDate()
    );
    if (today > upcomingBday) {
      upcomingBday.setFullYear(today.getFullYear() + 1);
    }
    const one_day = 24 * 60 * 60 * 1000;
    let daysLeft = Math.ceil(
      (upcomingBday.getTime() - today.getTime()) / one_day
    );
    if (daysLeft === 365) {
      setIsBirthday(true); // passed up to ChildHome
      daysLeft = 0;
    }
    return daysLeft;
  };

  const makeRandomMessage = () => {
    const messages = [
      `Life's good being a ${child.avatar}!`,
      `Be nice to your family!`,
      `Caring is Sharing!`,
      `You're looking great today!`,
      `That's funny - my favourite colour is ${child.color} too!`,
      `I'm sleepy and I want a nap!`,
      `Reading is fun! 📚`,
      `Your name backwards is ${backwardsName}.`,
      `🎂It's ${daysToBirthday} day${
        daysToBirthday === 1 ? "" : "s"
      } until your Birthday 🎂`,
    ];
    return String(messages[Math.floor(Math.random() * messages.length)]);
  };

  const [avatarName] = useState(makeAvatarName());
  const [backwardsName] = useState(makeBackwardsName());
  const [daysToBirthday] = useState(calculateDaysToBirthday());
  const [randomMessage] = useState(makeRandomMessage());

  if (child) {
    return (
      <h2 className="child-home-message-container">
        {avatarName} says: {randomMessage}
      </h2>
    );
  }
}

export default ChildHomeRandomMessage;
