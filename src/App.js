import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteChild from './components/PrivateRouteChild';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewChild from './pages/NewChild';
import Favourites from './pages/Favourites';
import NewFavourite from './pages/NewFavourite';
import ChildHome from './pages/ChildHome';
import ChildRewards from './pages/ChildRewards';
import ScrollToTop from './hooks/scrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<PrivateRouteChild />}>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Route>

            <Route path="/" element={<PrivateRouteChild />}>
              <Route path="/login" element={<Login />} />
            </Route>

            <Route path="/" element={<PrivateRouteChild />}>
              <Route path="/register" element={<Register />} />
            </Route>

            <Route path="/" element={<PrivateRouteChild />}>
              <Route path="/new-child" element={<PrivateRoute />}>
                <Route path="/new-child" element={<NewChild />} />
              </Route>
            </Route>

            <Route path="/" element={<PrivateRouteChild />}>
              <Route path="/favourites" element={<PrivateRoute />}>
                <Route path="/favourites" element={<Favourites />} />
              </Route>
            </Route>

            <Route path="/" element={<PrivateRouteChild />}>
              <Route path="/new-favourite" element={<PrivateRoute />}>
                <Route path="/new-favourite" element={<NewFavourite />} />
              </Route>
            </Route>

            <Route path="/childhome" element={<PrivateRoute />}>
              <Route path="/childhome" element={<ChildHome />} />
            </Route>

            <Route path="/childrewards" element={<PrivateRoute />}>
              <Route path="/childrewards" element={<ChildRewards />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
