import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Registration from '../Registration/Registration';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';
import { Provider } from 'react-redux';
import Footer from '../Footer/Footer';
import store from '../../redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/reg' element={<Registration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </Provider>
  );
}

export default App;
