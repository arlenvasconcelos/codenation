import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div data-testid="posts" className="container">
    {
      posts.map((post) => {
        const user = getUserHandler(post.userId)
        
        return <Post postInfo={post} userInfo={user}/>
      })
    }
  </div>
);

export default Posts;
