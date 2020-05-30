import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UsersList = ({ users }) => {

  if(!users.length){
    return <Loading/>
  }

  return (
    <section data-testid="user-list" className="users-list">
      <div className="users-list">
        {
          users.length && users.map((user, key) => (
            <User infoUser={user} key={key}/>
          ))
        }
      </div>
    </section>
  )
};

export default UsersList;
