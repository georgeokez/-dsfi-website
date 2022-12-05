import React from 'react';

const PageHeader = ({imageUrl, headerContent}) => {
  return (
      <div className="page-header-container">
        <img src={imageUrl} height="600" width="800" alt=""/>
        <div className="page-header-content">
            {headerContent}
        </div>       
      </div>
  )
}

export default PageHeader;