import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './App.css';
import '../../null.css';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

import Registration from '../Registration/Registration';
import Profile from '../Profile/Profile';

import store from '../../redux/store';

import Game from '../Game/Game';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('/profile', {})
      .then(res => res.json())
      .then(data => dispatch({ type: 'ADD_ALL_USERS', payload: data }))
  }, [])

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/reg' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
//

export default App;
