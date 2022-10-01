import React from 'react';

const MissionItem = ({ imageUrl, content }) => {  
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
        <div className="wpo-mission-item">
            <div className="wpo-mission-icon-5">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="wpo-mission-content">
                {/* This just adds a empty spacer to make all cards leveled visaully */}
                {(content.length < 20) ? 
                    <h2>
                        {content}
                        <div>&nbsp;</div> 
                    </h2>    
                        :
                    <h2>{content}</h2>
                }
            </div>
        </div>
    </div>
  )
}

export default MissionItem;