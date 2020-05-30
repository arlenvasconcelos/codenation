import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {

  const [videoDuration, setVideoDuration] = useState(null);
  const [videoCurrentTime, setVideoCurrentTime] = useState(null);

  const updateProgress = useCallback(
    () => {
    if (videoDuration !== null  && videoCurrentTime !== null) {
      const elapsedTime = ((videoCurrentTime / videoDuration) * 100);

      return `${elapsedTime.toFixed(0)}%`;
    }
    return '0%';
  }, [videoDuration, videoCurrentTime]);

  return (
    <section data-testid="story" className="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={`/users/${user.username}`} className="user__thumb">
              <img src={user.avatar} alt={user.username}/>
            </Link>
            <Link to={`/users/${user.username}`} className="user__name">
              {user.name}
            </Link>
          </div>
          <button className="story__close" onClick={handleClose}>
            <i className="fas fa-times" />
          </button>
        </header>
        <div className="story__progress">
          <div
            style={{ width: updateProgress()}}
            className="story__progress__elapsed"
          />
        </div>
        <div className="story__video__wrapper">
          <video
            autoPlay
            className="video-player"
            loop
            playsInline
            onTimeUpdate={e => setVideoCurrentTime(e.target.currentTime)}
            onLoadedMetadata={e => setVideoDuration(e.target.duration)}
            src={story.videoUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
