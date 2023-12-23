import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';

import Header from '../Layout/Header';
// import VerticalNav from '../layout/VerticalNav';
import Home from '../Pages/Home';
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
// function ConnectedLayout() {
//   return (
//     <>
//       <VerticalNav />
//         <Outlet />
//     </>
//   );
// }
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<BasicLayout />} >
            <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
