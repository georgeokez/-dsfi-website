import React from 'react';
import { partnershipContent } from '../utils/contents';

const PartnershipHeader = () => {
  return (
      <div className="partner-container">
        <img src='images/about/addons/dsfi_about_addon_pic_1.png' height="600" width="800" alt=""/>
        <div className="partner-content">
            {partnershipContent}
        </div>       
      </div>
  )
}

export default PartnershipHeader;