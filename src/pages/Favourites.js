import React from 'react';
import BackButton from '../components/BackButton';
import FavouritesList from '../components/FavouritesList';
import { Link } from 'react-router-dom';

function Favourite() {
  return (
    <>
        <BackButton url="/" />
        <FavouritesList />

        <Link to='/new-favourite' className="btn btn-reverse btn-block">New Favourite</Link>

    </>
  )
}

export default Favourite;