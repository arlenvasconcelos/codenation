import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {

  return (
    <section data-testid="user-profile" className="profile">
      <div className="profile-data">
        <div className="user">
          <div className="user__thumb">
            <img src={avatar} alt={username}/>
          </div>
          <p className="user__name">
            {name}<span>@{username}</span>
          </p>
        </div>
      </div>
      
    </section>
  )
};

export default UserProfile;
