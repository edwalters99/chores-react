import React from 'react';
import BackButton from '../components/BackButton';
import FavouritesList from '../components/FavouritesList';
import { Link } from 'react-router-dom';

function Favourite() {
  return (
    <>
      <BackButton url="/" />
      <Link to="/new-favourite" className="btn btn-reverse btn-block">
        Add New Favourite Chore
      </Link>
      <FavouritesList />
    </>
  );
}

export default Favourite;
