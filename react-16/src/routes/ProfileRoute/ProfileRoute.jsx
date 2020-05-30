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
  const [loading, setLoading]  = useState(false)

  const getUser = async () => {
    setLoading(true);
    await api.get(`/users?search=${username}`).then((response) => {
      setUser(response[0])
      setLoading(false);
    });
  }

  const getPosts = async (id) => {
    setLoading(true);
    await api.get(`/users/${id}/posts`).then((response) => {
      setPosts(response)
      setLoading(false);
    });
  }

  useEffect(()=>{
    getUser()
  },[])

  useEffect(()=>{
    if(user.id > -1)
      getPosts(user.id)
  },[user])

  if(loading){
    return <Loading/>
  }

  return (
    <div data-testid="profile-route">
      <UserProfile
        username={user.username}
        avatar={user.avatar}
        name={user.name}
      />
      <UserPosts posts={posts}/>
    </div>
  );
};

export default ProfileRoute;
