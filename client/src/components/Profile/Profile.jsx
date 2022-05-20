import React from 'react';
import { useSelector } from 'react-redux'

function Profile(props) {
  const {user} = useSelector(state=>state.user)

  return (
    <div>
    {user.length > 0 && <><h1>Это профиль</h1>
    <h1>{user[0].name}</h1></>}
    </div>
  );
}

export default Profile;
