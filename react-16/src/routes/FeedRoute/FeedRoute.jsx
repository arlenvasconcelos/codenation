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
  const [filteredUsers, setFilteredUsers] =useState([])

  const getUserHandler = (id) => {
    return users.filter((u) => u.id === id)[0]
  }

  useEffect(()=>{
    api.get('/stories').then((response)=> {
      setStories(response)
    })
  },[])

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response)
    })
  },[])

  useEffect(() => {
    //get users since available stories
    const loadFilteredUsers = () => {
      setFilteredUsers(users.filter((user) => {
        return stories.find((story) => story.userId === user.id)
      }))
    }
    if (stories.length && users.length)
      loadFilteredUsers();
  },[stories, users])

  useEffect(() => {
    filteredUsers.map((user) => {
      api.get(`/users/${user.id}/posts`).then(response => {
        setPosts((posts) => [...posts, ...response])
      })
    })
  },[filteredUsers])

  if (!stories.length || !filteredUsers.length){
    return <Loading/>
  }

  return (
    <div data-testid="feed-route">
      <Stories stories={stories} getUserHandler={getUserHandler}/>
      <Posts posts={posts} getUserHandler={getUserHandler}/>
    </div>
  );
};

export default FeedRoute;
