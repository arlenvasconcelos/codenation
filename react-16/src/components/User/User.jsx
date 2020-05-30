import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  const {avatar, name, username, } = infoUser;

  return (
    <article data-testid="user" className="post">
      <header className="post__header">
        <Link to={`/users/${username}`}> 
          <div className="user">
            <div className="user__thumb">
              <img src={avatar} alt={username}/>
            </div>
            <div className="user__name">
              {name}
            </div>
          </div>
        </Link>
      </header>
    </article>
  )
};

export default User;
