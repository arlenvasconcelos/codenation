import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import api from '../../service/api'

import './UserForm.scss';

const UserForm = () => {

  const [newUser, setNewUser] = useState(
    {
      name: "",
      avatar: "",
      username: "",
      email: ""
    }
  );

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleAddUser = (e) => {
    e.preventDefault();
    api.post('users', JSON.stringify(newUser)).then((response) => {
      setShowSuccessMessage(true)
    })
  }

  const handleChange = (value, label) => {
    setNewUser({...newUser, [label]: value})
  }

  return (
    <React.Fragment>
      <div data-testid="user-form">
        <div className="container">
          <div className="post__form">
            <form onSubmit={handleAddUser} className="post__form__wrapper">
              <label htmlFor="input-name">Nome</label>
              <input 
                type="text" 
                id="input-name"
                value={newUser.name}
                onChange={(e) => handleChange(e.target.value, 'name')}
              />
              
              <label htmlFor="input-username">Usuário</label>
              <input 
                type="text" 
                id="input-username" 
                value={newUser.username}
                onChange={(e) => handleChange(e.target.value, 'username')}
              />
              
              <label htmlFor="input-email">Email</label>
              <input 
                type="email"
                id="input-email" 
                value={newUser.email}
                onChange={(e) => handleChange(e.target.value, 'email')}
              />
              
              <label htmlFor="input-avatar">Avatar</label>
              <input 
                type="text" 
                id="input-avatar" 
                value={newUser.avatar}
                onChange={(e) => handleChange(e.target.value, 'avatar')}
              />
              
              <button type="submit">Cadastrar</button>
            </form>
          </div>
          {
            showSuccessMessage ? <SuccessMessage/> : <></>
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserForm;
