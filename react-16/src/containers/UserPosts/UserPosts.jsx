import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div data-testid="user-posts" className="container">
    <div className="user-posts">
      {posts.map((post, key)=>(
        <Post key={key} postInfo={post}/>
      ))}
    </div>
  </div>
);

export default UserPosts;
