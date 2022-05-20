import React from 'react';

function Profile(props) {

    fetch("/profile",{
      headers: {"content-type": "application/json"},
      method: "GET",
      body: JSON.stringify()
    })
    // .then(res => res.json())
    .then((data) => {
      console.log(data);
    });


  //   fetch('/profile')
  // .then((res) => {
  //   return res.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // });


  return (
    <div>
      <h1>Это профиль</h1> 
    </div>
  );
}

export default Profile;
