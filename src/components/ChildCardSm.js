import React from 'react'

import dog from '../images/dog.png';
import cat from '../images/cat.png';
import dino from '../images/dino.png';
import rabbit from '../images/rabbit.png';

function ChildCardSm(props) {
    const avatarImg = () => {
        if (props.avatar === 'cat') {return (<img src={ cat } />)}
        if (props.avatar === 'dog') {return (<img src={ dog } />)}
        if (props.avatar === 'dinosaur') {return (<img src={ dino } />)}
        if (props.avatar === 'rabbit') {return (<img src={ rabbit } />)}
    };

    return (
        <div className='avatar-container-sm'>
            <h2 className='avatar-name-sm'>{ props.firstname }</h2>
  
        
                <div className="avatar-img-sm">{ avatarImg() }</div>
        
        </div>
  )
}

export default ChildCardSm;