import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {

  const [showStory, setShowStory] = useState(false)
  const [selectedStory, setSelectedStory] = useState({})
  const [selectedUser, setSelectedUser] = useState({})


  const handleClose = () => {setShowStory(false)}

  const handleSelectStory = (story, user) => {
    setSelectedStory(story)
    setSelectedUser(user)
    setShowStory(true)
  }

  return (
    <React.Fragment>
      <section data-testid="stories" className="stories">
        <div className="container">
          {
            stories.map((story, key) => {
              const user = getUserHandler(story.userId)
              return ( 
                <button key={key} className="user__thumb" onClick={() => handleSelectStory(story, user)}>
                  <img src={user.avatar} alt={user.name}/>
                </button>
              )
            })
          }
        </div>
      </section>

      {showStory && (
        <Story 
          story={selectedStory} 
          user={selectedUser}
          handleClose={handleClose}
        />
        )}
    </React.Fragment>
  );
};



export default Stories;
