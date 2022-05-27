import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewChild from './pages/NewChild';
import Favourites from './pages/Favourites';
import NewFavourite from './pages/NewFavourite';
import ChildHome from './pages/ChildHome';


function App() {
  return (
    <>
      <Router>
        <div className="container">
        <Header />
          <Routes>
          <Route path='/' element={<PrivateRoute />}> 
            <Route path='/' element={<Home />} />
          </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* Wrap in Private Route to protect */}
            <Route path='/new-child' element={<PrivateRoute />}> 
              <Route path='/new-child' element={<NewChild />} />
            </Route>
            <Route path='/favourites' element={<PrivateRoute />}> 
              <Route path='/favourites' element={<Favourites />} />
            </Route>
            <Route path='/new-favourite' element={<PrivateRoute />}> 
              <Route path='/new-favourite' element={<NewFavourite/>} />
            </Route>
            <Route path='/childhome' element={<ChildHome/>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
