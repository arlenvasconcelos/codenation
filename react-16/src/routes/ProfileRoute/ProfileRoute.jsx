import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import api from '../../service/api'

const ProfileRoute = () => {

  const {username} = useParams();

  const [user, setUser]  = useState({
    id: -1,
    name: '',
    username: '',
    avatar: '',
    email: ''
  })
  const [posts, setPosts]  = useState([])
  const [loadingUser, setLoadingUser]  = useState(false)
  const [loadingPosts, setLoadingPosts]  = useState(false)

  const getUser = async () => {
    setLoadingUser(true);
    await api.get(`/users?search=${username}`).then((response) => {
      setUser(response[0])
      setLoadingUser(false);
    });
  }

  const getPosts = async (id) => {
    setLoadingPosts(true);
    await api.get(`/users/${id}/posts`).then((response) => {
      setPosts(response)
      setLoadingPosts(false);
    });
  }

  useEffect(()=>{
    getUser()
  },[])

  useEffect(()=>{
    if(user.id > -1)
      getPosts(user.id)
  },[user])

  return (
    <div data-testid="profile-route">
      {
        loadingUser ? (
          <UserProfile
            username={user.username}
            avatar={user.avatar}
            name={user.name}
          />
        ) : (
          <Loading/>
        )
      }
      {
        loadingPosts ? (
          <UserPosts posts={posts}/>
        ) : (
          <Loading/>
        )
      }
    </div>
  );
};

export default ProfileRoute;
