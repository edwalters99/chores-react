import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ParentPinForm({ chore, setApproved }) {
    const [pinInput, setPinInput] = useState('');
    const [failed, setFailed] = useState(false);
    
    const { user } = useSelector((state) => state.auth);

 
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setPinInput(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(pinInput) == user.pin) {
            setApproved(chore._id); // function passed down from AssignedChores.js
        } else {
           setFailed(true);
        }
    };


    return (
    <div className="parent-pin-form-container">
        { failed ? <p>Wrong PIN</p> : <p>Parent: enter PIN:</p> }
        <form className="parent-pin-form">
            <input onChange={ handleChange } type="password" maxLength={ 4 } required placeholder="4-digit PIN" value={ pinInput } />
            <button className="btn-parentpin-yes" onClick={ handleSubmit }>Yes!</button>

        </form>
    </div>
  )
}

export default ParentPinForm