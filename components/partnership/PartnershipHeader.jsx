import React from 'react';
import { partnershipContent } from '../utils/contents';

const PartnershipHeader = () => {
  return (
      <div className="partner-container">
        <div className="partner-content">
            {partnershipContent}
        </div>       
      </div>
  )
}

export default PartnershipHeader;