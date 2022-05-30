import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteChore, getChores, reset } from '../features/chores/choreSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function FavouriteDelete({choreId }) {
  return (
    <div>
        <button className="btn btn-sm delchore-btn">Delete Chore</button>
    </div>
  )
}

export default FavouriteDelete;