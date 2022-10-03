import React from 'react';
import { aboutContent } from '../utils/contents';

const AboutContent = () => {
  return (
    <div className="about-container">
        <div className="about-content">
            {aboutContent}
        </div>       
    </div>
  )
}

export default AboutContent;