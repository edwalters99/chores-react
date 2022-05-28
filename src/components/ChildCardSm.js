import React from 'react'
import ChildDelete from './ChildDelete';
import { useNavigate } from 'react-router-dom';

import dog from '../images/dog.png';
import cat from '../images/cat.png';
import dino from '../images/dino.png';
import rabbit from '../images/rabbit.png';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



function ChildCardSm(props) {
    
    const navigate = useNavigate();

    const avatarImg = () => {
        if (props.avatar === 'cat') {return (<img src={ cat } />)}
        if (props.avatar === 'dog') {return (<img src={ dog } />)}
        if (props.avatar === 'dinosaur') {return (<img src={ dino } />)}
        if (props.avatar === 'rabbit') {return (<img src={ rabbit } />)}
    };

    const onClick = () => {
        confirmAlert({
            title: `Login ${ props.firstname }?`,
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    localStorage.setItem('childAuth', JSON.stringify(props._id));
                    navigate('/childhome');  // 'log in' child by setting their id in localStorage
                }
              },
              {
                label: 'No',
                onClick: () => {return}
              }
            ]
          });
    };

    return (
        <>
            <div className='avatar-container-sm'>
                <div className="avatar-container-sub">
                    <h2 className='avatar-name-sm'>{ props.firstname }</h2>
                    <div className="avatar-img-sm">{ avatarImg() }</div>
                </div>
                <div className="avatar-container-btns">
                    <ChildDelete childId={ props._id } forceRerender={ props.forceRerender }
                    />
                    <button className="btn btn-sm btn-center" onClick={ onClick }>Login</button>
                </div>
            </div>
            
        </>
  )
}

export default ChildCardSm;