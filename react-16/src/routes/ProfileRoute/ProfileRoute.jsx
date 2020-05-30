import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import api from '../../service/api'

const ProfileRoute = () => {

  const {id} = useParams()

  const [user, setUser]  = useState({})
  const [posts, setPosts]  = useState([])
  const [loading, setLoading]  = useState(false)

  const getUser = async () => {
    setLoading(true);
    await api.get(`/users/${id}`).then((response) => {
      setUser(response)
      setLoading(false);
    });
  }

  const getPosts = async () => {
    setLoading(true);
    await api.get(`/users/${id}/posts`).then((response) => {
      setPosts(response)
      setLoading(false);
    });
  }

  useEffect(()=>{
    getUser()
    getPosts()
  },[])

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
