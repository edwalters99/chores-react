import React from 'react'

function ParentPinForm({ chore }) {
  return (
    <div className="parent-pin-form-container">
        <p>Parent enter PIN:</p>
        <form className="parent-pin-form">
            <input type="password" maxLength={ 4 } required placeholder="4-digit PIN"></input>
            <button className="btn-parentpin-yes">Yes!</button>

        </form>
    </div>
  )
}

export default ParentPinForm