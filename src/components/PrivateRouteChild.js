import { Navigate, Outlet } from 'react-router-dom';
import { useChildAuthStatus } from '../hooks/useChildAuthStatus';
import Spinner from './Spinner';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import React from 'react';

const PrivateRouteChild = () => {
    
  const childLoggedIn = useChildAuthStatus();


  if (childLoggedIn) {
      return <Navigate to='/childhome' />
  } else {
      return (
        <Outlet />
      )  
  };
};

export default PrivateRouteChild;