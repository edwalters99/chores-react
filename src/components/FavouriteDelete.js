import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavourite, reset } from '../features/favourites/favouriteSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


function FavouriteDelete({ favId, favTitle }) {

  const { isLoading, isSuccess, isError, message } = useSelector((state) => state.favourite)

  const dispatch = useDispatch();

  useEffect(() => {  
      if (isSuccess) {
          dispatch(reset());
      };
      if (isError) {
          toast.error(message, { toastId: 'tMessage'});
        };
     
  }, [isLoading, isSuccess, isError]);

  const onClick = (e) => {
    confirmAlert({
        title: 'Confirm Delete Chore',
        message: `${ favTitle } ....Are you sure?`,
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              dispatch(deleteFavourite(favId));
            }
          },
          {
            label: 'No',
            onClick: () => {return}
          }
        ]
      });
  };

  if (isLoading) {
    return (<ClipLoader />)
  };

  return (
    <div>
        <button className="btn btn-sm delchore-btn" onClick={ onClick }>Delete Favourite Chore</button>
    </div>
  )
}

export default FavouriteDelete;