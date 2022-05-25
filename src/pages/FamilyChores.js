import React from 'react';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';

function FamilyChores() {
  return (
    <>
        <BackButton url="/" />
        <div>ChoreLIST</div>

        <Link to='/new-familychores' className="btn btn-reverse btn-block">New Favourite</Link>

    </>
  )
}

export default FamilyChores;