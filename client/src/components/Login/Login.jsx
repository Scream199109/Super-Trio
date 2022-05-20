import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Login(props) {
  const navigation= useNavigate()
  const dispatch = useDispatch();
  const [regError, setError] = useState();
  const addUser =  async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value, 
      password: event.target.password.value,
    }
    const response = await fetch('/login', {
      method: 'POST',
      headers: {"Content-type": "Application/json"},
      body: JSON.stringify(data)
    })
      if(!response.ok){
      const {error} = await response.json()
      setError(error)
    } else {
      const data = await response.json()
      navigation('/game')
    }
  }
  return (
<>
    <div className="container">
    <form className="container" onSubmit={addUser}>
      <div className="container">
        <div className="container">
          <input id="email" type="email" className="validate" placeholder='Введите Email'/>
        </div>
      <div className="container">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" placeholder='Введите пароль'/>
          { regError ? <div className="red-text">{regError}</div> : ''} 
        </div>
      </div>
      </div>
      <button type='submite' >Войти</button>
    </form>
  </div>
  </>
  );
}

export default Login
