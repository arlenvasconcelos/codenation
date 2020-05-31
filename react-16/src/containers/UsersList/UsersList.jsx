import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UsersList = ({ users }) => {

  return (
    <section data-testid="user-list" className="users-list">
      {
        users.length ? (
          users.length && users.map((user, key) => (
            <User infoUser={user} key={key}/>
          ))
        ) : (
          <Loading/>
        )
      }
    </section>
  )
};

export default UsersList;
