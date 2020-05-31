import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div data-testid="posts" className="container">
    {
      posts.map((post, key) => {
        const user = getUserHandler(post.userId)
        
        return <Post key={key} postInfo={post} userInfo={user}/>
      })
    }
  </div>
);

export default Posts;
