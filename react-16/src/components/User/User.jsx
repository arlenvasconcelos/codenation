import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  const {avatar, name, username, id} = infoUser;

  return (
    <article data-testid="user" className="post">
      <header className="post__header">
        <Link to={`/users/${id}`} className="user">
          <div className="user__thumb">
            <img src={avatar} alt={username}/>
          </div>
          <div className="user__name">{name}</div>
        </Link>
      </header>
    </article>
  )
};

export default User;
