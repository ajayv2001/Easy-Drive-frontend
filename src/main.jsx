import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Login from './components/login/Login.jsx';
import Signup from './components/signup/SignUp.jsx';

import SearchResults from './pages/Results/SearchResults.jsx';
import CarDetails from './pages/CarDetails/CarDetails.jsx';
import CarRentalSearch from './pages/Home/Home.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Success from './pages/stripe/Sucess.jsx';
import Cancel from './pages/stripe/Cancel.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/signin' element={<Signup/>}/>
      <Route  path='/home' element={<CarRentalSearch/>}/>
      <Route path="/results" element={<SearchResults/>} />
      <Route path="/details/:id" element={<CarDetails />} />
      <Route  path='/main-page' element={<MainPage/>}/>
      <Route  path='/success' element={<Success/>}/>
      <Route  path='/cancel' element={<Cancel/>}/>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
