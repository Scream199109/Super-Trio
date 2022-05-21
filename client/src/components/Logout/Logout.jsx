import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOutAC } from '../../redux/actionCreators/userAC';
import store from '../../redux/store';

function Logout(props) {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    logout()
  }, [dispatch])
  const logout = async (event) => {

    const response = await fetch('/logout')
    const data = await response.json({})
    console.log("🚀 ~ logout ~ data", data)
    dispatch(logOutAC(logout))
    navigation('/')
  }

  return (
    <div>
    </div >
  );
}

export default Logout;
