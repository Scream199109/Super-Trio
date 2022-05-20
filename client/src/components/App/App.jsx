import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import Registration from '../Registration/Registration';
import './App.css';
import '../../null.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import store from '../../redux/store';
import Game from '../Game/Game';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
          <Route path='/reg' element={<Registration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
