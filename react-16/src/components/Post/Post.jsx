import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {

  const [following, setFollowing] = useState(false)
  const [liked, setLiked] = useState(false)

  const handleFollowing = () => {
    setFollowing(!following)
  }

  const handleLiked = () => {
    setLiked(!liked)
  }

  return (
    <article data-testid="post" className="post">
    {
      !userInfo ? (
        <div className="post__figure">
          <img src={postInfo.imageUrl} alt={postInfo.url}/>
        </div>
      ) : (
        <section className="post__context">
          <div className="post__header">
            <div className="user">
              <Link to={`/users/${userInfo.username}`} className="user__thumb">
                <img src={userInfo.avatar} alt={userInfo.username}/>
              </Link>
              <Link to={`/users/${userInfo.username}`} className="user__name">
                {userInfo.name}
              </Link>
            </div>
            <button 
              className={following ? "follow-btn is-following" : "follow-btn"}
              onClick={handleFollowing}>
              {following ? "Seguindo" : "Seguir"}
            </button>
          </div>
          <div className="post__figure">
            <img src={postInfo.imageUrl} alt={postInfo.imageUrl}/>
          </div>
          <div className="post__controls">
            <button className="post__control" onClick={handleLiked}>
              <i className={liked ? "fas fa-heart" : "far fa-heart"}/>
            </button>
            <div className="post__status">
              <p className="user">
                <span>
                  curtido por
                  <Link to="#"> Elvis Schulist </Link>
                  e outra<Link to="#"> 1 pessoa </Link>
                </span> 
              </p>
            </div>
          </div>
        </section>
      )
    }
    </article>
  );
};

export default Post;
