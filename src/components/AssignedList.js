import React from 'react';
import { nanoid } from 'nanoid';

function AssignedList({ names }) {

  if (names.length !== 0) {
    return (
        <div className='assigned-list'>
            { names.map((name) => {
                return (
                    <p key={ nanoid }>Assigned to: <strong>{ name }</strong></p>
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