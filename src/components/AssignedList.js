import React from 'react';
import { getChores, reset } from '../features/chores/choreSlice';
import { useSelector, useDispatch } from 'react-redux';

function AssignedList({ names }) {

  if (names.length !== 0) {
    return (
        <div className='assigned-list'>
            { names.map((name) => {
                return (
                    <p>Assigned to: <strong>{ name }</strong></p>
                )
            })}
        </div>
    )
  }

  return (
      <></>
  )
}

export default AssignedList;