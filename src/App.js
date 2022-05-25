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
import FamilyChores from './pages/FamilyChores';
import NewFamilyChores from './pages/NewFamilyChores';


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
            <Route path='/familychores' element={<PrivateRoute />}> 
              <Route path='/familychores' element={<FamilyChores />} />
            </Route>
            <Route path='/new-familychores' element={<PrivateRoute />}> 
              <Route path='/new-familychores' element={<NewFamilyChores />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
