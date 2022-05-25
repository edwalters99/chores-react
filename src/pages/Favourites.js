import React from 'react';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';

function Favourite() {
  return (
    <>
        <BackButton url="/" />
        <div>ChoreLIST</div>

        <Link to='/new-favourite' className="btn btn-reverse btn-block">New Favourite</Link>

    </>
  )
}

export default Favourite;