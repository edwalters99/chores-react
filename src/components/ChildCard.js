import React from 'react';
import dayjs from 'dayjs';
import dog from '../images/dog.png';
import cat from '../images/cat.png';
import dino from '../images/dino.png';
import rabbit from '../images/rabbit.png';

function ChildCard(props) {
  const avatarImg = () => {
    if (props.avatar === 'cat') {
      return <img src={cat} alt="cat" />;
    }
    if (props.avatar === 'dog') {
      return <img src={dog} alt="dog" />;
    }
    if (props.avatar === 'dinosaur') {
      return <img src={dino} alt="dinosaur" />;
    }
    if (props.avatar === 'rabbit') {
      return <img src={rabbit} alt="rabbit" />;
    }
  };

  const age = dayjs(new Date()).diff(dayjs(props.dob), 'year');

  return (
    <div className="avatar-container">
      <h2 className="avatar-name">{props.firstname}</h2>
      <h3 className="avatar-age">Age: {age}</h3>
      <div className="flexbox">
        <div
          className="colorswatch"
          style={{ background: `${props.color}` }}
        ></div>
        <div className="avatar-img">{avatarImg()}</div>
      </div>
    </div>
  );
}

export default ChildCard;
