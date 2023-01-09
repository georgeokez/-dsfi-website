import React from 'react';
import { wrappedDefaultImageUrl as defaultImage } from '../utils/imageUrl';

const WrappedImage = ({ imageUrl = defaultImage }) => {
  return (
    <div className="wrapped-image-container">
        <div className="wrapped-image">
            <img src={imageUrl} alt="wrapped-image"/>
        </div>
    </div>
  )
}

export default WrappedImage;