
import SignupPage from './pages/SignupPage/index1';
import Dashboard from './pages/Dashboard';

import React, {useState} from 'react';
import { Header } from './components/header';
import { ProfilePage } from './pages/ProfilePage';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';

import Data from './Data';     
import './App.css'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

const getValidate = () => {
  //if exist verify value then return true or false

  const data = Data();
    console.log(data.status);
  return(data.status);
  
}

const setValidate = () => {
  // check the verify code from db
  const data = Data();
  data.status = false;
  return data;
  
}

const App = () => {     
  
  // const validate = getValidate();
  // const [validate, setValidate] = useState(false);
  
  // if(!validate){
  //   return <SignupPage setValidate={setValidate}/>
  // }

  const Layout = () => {
    return(
      <div>
        <Header/>
        <Outlet/>
      </div>
    )
  }

  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  )  
}

export default App;
