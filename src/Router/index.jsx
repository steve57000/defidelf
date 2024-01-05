import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

import Header from '../Layout/Header/Header';
// import VerticalNav from '../layout/VerticalNav';
import Home from '../Pages/Home/Home';
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
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
        <Route exact path="" element={<BasicLayout />} >
          <Route index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
