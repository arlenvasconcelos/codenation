import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {

  console.log(postInfo)
  return (
    <article data-testid="post" className="post">
      <div className="post__figure">
        <img src={postInfo.imageUrl}/>
      </div>
    </article>
  );
};

export default Post;
