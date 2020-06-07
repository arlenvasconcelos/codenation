import React, {useEffect, useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {updateContent} from '../../actions'

import { Dashboard, Categories} from '../../containers';

import {apiCategories} from '../../constants'


const DashboardRoute = () => {
  
  const dispatch = useDispatch();
  const {auth, content: {categories}} = useSelector(state => state);
  
  const [loading, setLoading] = useState(false);

  const loadCategories = () => {
    setLoading(true)
    fetch(apiCategories, {
      method: 'GET',
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'Authorization': 'Bearer ' + auth.accessToken
      }
    })      
    .then((response) => response.json())
    .then(response => {
      dispatch(updateContent(response))
      console.log(response)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err);
      setLoading(false)
    })
  }

  useEffect(() => {
    loadCategories();
  }, [])

  return (
    <Dashboard>
      <Categories 
        isLoading={loading}
        // url={categories.href}
        data={categories}
      />
    </Dashboard>
  )
}

export default DashboardRoute