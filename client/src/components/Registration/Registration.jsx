import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserAC } from '../../redux/actionCreators/userAC';

function Registration() {
  const navigation= useNavigate()
  const dispatch = useDispatch();
  const [regError, setError] = useState();
  
  const addUser =  async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value, 
      email: event.target.email.value, 
      password: event.target.password.value,
      password2: event.target.password2.value
    }
    // console.log('=======>', data);
    const response = await fetch('/reg', {
      method: 'POST',
      headers: {"Content-type": "Application/json"},
      body: JSON.stringify(data)
    })
    if(!response.ok){
      const {error} = await response.json()
      setError(error)
    } else {
      const data = await response.json()
      dispatch(addUserAC(data))
      navigation('/game')
    }
    // .then(res => res.json())
    // .then(data => dispatch(addUserAC(data)))
  }
  

  return (
    <>
    <div className="container">
    <form className="container" onSubmit={addUser}>
      <div className="container">
        <div className="container">
          <input placeholder="Введите Имя" id="name" type="text" className="validate"/>
        </div>
      </div>
      <div className="container">
        <div className="container">
          <input id="email" type="email" className="validate" placeholder='Введите Email'/>
        </div>
      <div className="container">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" placeholder='Введите пароль'/>
        </div>
      </div>
      <div className="container">
        <div className="input-field col s12">
          <input id="password2" type="password" className="validate" placeholder='Повторите пароль'/>
        </div>
      </div>
      </div>
      <button type='submit' className='waves-effect waves-light btn-large brown lighten-2'>Зарегистрироваться</button>
      { regError ? <div className="red-text">{regError}</div> : ''} 
    </form>
  </div>
  </>
  );
}

export default Registration;
