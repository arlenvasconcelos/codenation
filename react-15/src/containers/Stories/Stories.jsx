import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {

  const showStory = () => false

  return (
    <React.Fragment>
      <section data-testid="stories" className="stories">
        <div className="container">
        </div>
      </section>

      {showStory && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
