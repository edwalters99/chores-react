import React from 'react';
import { useState, useEffect } from 'react';

export const useChildAuthStatus = () => {
    return (localStorage.getItem('childAuth') !== null)
};