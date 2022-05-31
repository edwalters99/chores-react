import React, { useState } from "react";
import { useSelector } from "react-redux";

function ParentPinFormReward({ setClaimed, updateChildBalance, cost }) {
  const [pinInput, setPinInput] = useState("");
  const [failed, setFailed] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setPinInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(pinInput) == user.pin) {
      updateChildBalance(cost); // function passed down from ChildRewards.js
    } else {
      setFailed(true);
    }
  };

  return (
    <div className="parent-pin-form-container">
      {failed ? (
        <p onClick={() => setClaimed(false)}>Wrong PIN</p>
      ) : (
        <p onClick={() => setClaimed(false)}>Parent: enter PIN:</p>
      )}

      <form className="parent-pin-form">
        <input
          onChange={handleChange}
          type="password"
          maxLength={4}
          required
          placeholder="4-digit PIN"
          value={pinInput}
        />
        <button className="btn-parentpin-yes" onClick={handleSubmit}>
          Yes!
        </button>
      </form>
    </div>
  );
}

export default ParentPinFormReward;
