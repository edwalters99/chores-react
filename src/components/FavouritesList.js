import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavourites, reset } from "../features/favourites/favouriteSlice";
import { getChildren } from "../features/children/childSlice";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import FavouriteDisplay from "./FavouriteDisplay";

function FavouritesList() {
  const { favourites, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.favourite
  );

  const { children } = useSelector((state) => state.child);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavourites());
    dispatch(getChildren());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
    if (isError) {
      toast.error(message, { toastId: "tMessage" });
    }
  }, [isLoading, isSuccess, isError]);

  if (isLoading) {
    return <ClipLoader />;
  }

  if (favourites.length === 0 && !isLoading) {
    return (
      <p className="favlist-heading">
        No favourite chores yet. Please add one...{" "}
      </p>
    );
  }

  return (
    <div className="favlist-container">
      {favourites.map((fav) => (
        <FavouriteDisplay fav={fav} key={fav._id} children={children} />
      ))}
    </div>
  );
}

export default FavouritesList;
