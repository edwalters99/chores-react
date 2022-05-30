import React from 'react';
import dog from '../images/dog.png';
import cat from '../images/cat.png';
import dino from '../images/dino.png';
import rabbit from '../images/rabbit.png';

function ChildHomeAvatar({ avatar }) {
    
    const avatarImg = () => {
        if (avatar === 'cat') {return (<img src={ cat } />)}
        if (avatar === 'dog') {return (<img src={ dog } />)}
        if (avatar === 'dinosaur') {return (<img src={ dino } />)}
        if (avatar === 'rabbit') {return (<img src={ rabbit } />)}
    };
  
    return (
    <div className="child-home-avatar-container">{ avatarImg() }</div>
  )
}

export default ChildHomeAvatar