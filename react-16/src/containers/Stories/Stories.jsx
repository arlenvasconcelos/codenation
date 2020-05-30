import React, { useState, useEffect } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {

  const [showStory, setShowStory] = useState(false)
  const [selectedStory, setSelectedStory] = useState({})


  const handleClose = () => {setShowStory(false)}

  const handleSelectStory = (story) => {
    setSelectedStory(story)
    setShowStory(true)
  }

  return (
    <React.Fragment>
      <section data-testid="stories" className="stories">
        <div className="container">
          {
            stories.map((story, key) => {
              const user = getUserHandler(story.userId)
              console.log(user)
              return ( 
                <button key={key} className="user__thumb" onClick={() => handleSelectStory(story)}>
                  <img src={user.avatar} alt={user.name}/>
                </button>
              )
            })
          }
        </div>
      </section>

      {showStory && (
        <Story 
          story={selectedStory} handleClose={handleClose}
        />
        )}
    </React.Fragment>
  );
};



export default Stories;
