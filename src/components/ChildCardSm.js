import React from 'react'
import ChildDelete from './ChildDelete';

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
        <>
            <div className='avatar-container-sm'>
                <div className="avatar-container-sub">
                    <h2 className='avatar-name-sm'>{ props.firstname }</h2>
                    <div className="avatar-img-sm">{ avatarImg() }</div>
                </div>
                <ChildDelete childId={ props._id } forceRerender={ props.forceRerender }/>
            </div>
            
        </>
  )
}

export default ChildCardSm;