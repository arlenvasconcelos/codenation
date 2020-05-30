import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import api from '../../service/api'

import './FeedRoute.scss';

const FeedRoute = () => {

  const [posts, setPosts] = useState([])
  const [stories, setStories] = useState([])
  const [users, setUsers] =useState([])

  const getUserHandler = (id) => {
    // const user = await api.get('/users/'+id)
    return users.filter((u) => u.id === id)[0]
  }

  useEffect(()=>{
    api.get('/stories').then((response)=> {
      setStories(response)
    })
    api.get('/users').then(response => {
      setUsers(response)
    })
  },[])

  return (
    <div data-testid="feed-route">
      <Stories stories={stories} getUserHandler={getUserHandler}/>
      <Posts />
    </div>
  );
};

export default FeedRoute;
