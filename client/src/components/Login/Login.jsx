import React from 'react';


function Login(props) {

  return (
<>
    <div className="container">
    <form className="container">
      <div className="container">
        <div className="container">
          <input id="email" type="email" className="validate" placeholder='Введите Email'/>
        </div>
      <div className="container">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" placeholder='Введите пароль'/>
        </div>
      </div>
      </div>
      <button>Войти</button>
    </form>
  </div>
  </>
  );
}

export default Login;
