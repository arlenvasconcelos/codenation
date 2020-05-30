import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section data-testid="story" className="story">
      <div className="container">
        <div className="story__header">
          <div className="user">
            <Link to={`/users/${user.username}`} className="user__thumb">
              <img src={user.avatar} alt={user.username}/>
            </Link>
            <p className="user__name">
              {user.name}
            </p>
          </div>
          <button className="story__close">
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="story__progress"></div>
        <div className="story__header"></div>
      </div>
    </section>
  );
};

export default Story;
