import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOutAC } from '../../redux/actionCreators/userAC';
import store from '../../redux/store';

function Logout(props) {
  const navigation = useNavigate()
  const dispatch = useDispatch()
const logout = async(event) => {
  event.preventDefault()
  const response = await fetch('/', {
    method: 'GET',
    headers: {"Content-type": "Application/json"},
    body: JSON.stringify()
  })
  const data = await response.json({})
  dispatch(logOutAC(logout))
  navigation('/')
}

  return (
    <div>
     </div >
  );
}

export default Logout;
