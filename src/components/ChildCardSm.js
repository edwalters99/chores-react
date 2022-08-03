import React from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import dog from '../images/dog.png';
import cat from '../images/cat.png';
import dino from '../images/dino.png';
import rabbit from '../images/rabbit.png';
import ChildDelete from './ChildDelete';

function ChildCardSm(props) {
  const navigate = useNavigate();

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

  const onClick = () => {
    confirmAlert({
      title: `Login ${props.firstname}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            localStorage.setItem('childAuth', JSON.stringify(props._id));
            navigate('/childhome'); // 'log in' child by setting their id in localStorage
          },
        },
        {
          label: 'No',
          onClick: () => {
            return;
          },
        },
      ],
    });
  };

  return (
    <>
      <div className="avatar-container-sm">
        <div className="avatar-container-sub">
          <h2 className="avatar-name-sm">{props.firstname}</h2>
          <div className="avatar-img-sm">{avatarImg()}</div>
        </div>
        <div className="avatar-container-btns">
          <button className="btn btn-sm" onClick={onClick}>
            Login
          </button>
          <ChildDelete childId={props._id} childName={props.firstname} />
        </div>
      </div>
    </>
  );
}

export default ChildCardSm;
