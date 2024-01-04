import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

import Header from '../Layout/Header';
// import VerticalNav from '../layout/VerticalNav';
import Home from '../Pages/Home/Home';
import HomePage from "../Pages/HomePage/HomePage";
// import ErrorPage from '../pages/ErrorPage';
// import DashboardHome from "../pages/Dashboard";
function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
function App() {
  return (
    <Router basename="defidelf">
      <Routes>
        <Route exact path="/" element={<BasicLayout />} >
            <Route index element={<Home />} />
            <Route path="/homePage" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
