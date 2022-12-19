import React from 'react';
import { Header } from '../../components/header';
import { ProfilePage } from '../ProfilePage';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';

import './dashboard.css';

function Dashboard() {
  const Layout = () => {
    return(
      <div>
        <Header/>
        <Outlet/>
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Dashboard;
