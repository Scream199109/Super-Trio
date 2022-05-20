import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Registration from '../Registration/Registration';
import store from '../../redux/store';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
