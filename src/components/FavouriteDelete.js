import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavourite, reset } from '../features/favourites/favouriteSlice';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function FavouriteDelete({ favId, favTitle }) {
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.favourite
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
    if (isError) {
      toast.error(message, { toastId: 'tMessage' });
    }
  }, [isLoading, isSuccess, isError, dispatch, message]);

  const onClick = (e) => {
    confirmAlert({
      title: 'Confirm Delete Chore',
      message: `${favTitle} ....Are you sure?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            dispatch(deleteFavourite(favId));
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

  if (isLoading) {
    return <ClipLoader />;
  }

  return (
    <div>
      <button className="btn btn-sm delchore-btn" onClick={onClick}>
        Delete Favourite Chore
      </button>
    </div>
  );
}

export default FavouriteDelete;
