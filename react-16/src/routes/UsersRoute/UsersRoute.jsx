import React, { useState, useEffect } from 'react';

import api from '../../service/api'

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {

  const [users, setUsers]  = useState([])

  useEffect(()=>{
    api.get('/users').then((response) => {
      setUsers(response)
    })
  },[])

  return (
    <div  data-testid="users-route" className="container">
      <UsersList users={users}/>
    </div>
  );
};

export default UsersRoute;