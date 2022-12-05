import React from 'react';
import { aboutContentOne, aboutContentTwo } from '../utils/contents';

const AboutContent = () => {
  return (
    <div className="about-container">
        <div className="about-content">
          <p>{aboutContentOne}</p>
          <p>{aboutContentTwo}</p>          
        </div>       
    </div>
  )
}

export default AboutContent;