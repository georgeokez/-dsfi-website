import React from 'react';
import { contactDetials, socialAccounts, socialMediaLinks } from '../utils/contents';

const PageHeader = ({ imageUrl, headerContent }) => {
  return (
      <div className="page-header-container">
        <div><img src={imageUrl} className="page-header-img" alt=""/></div>
        <div className="page-header-content">
          {headerContent ?
           headerContent : 
            <div>
              <div>
                <p><b>Intagram</b>:&nbsp; <a href={socialMediaLinks.instagram} target="_blank" alt="Instagram Link">{socialAccounts.instagram}</a></p>
                <p><b>Youtube</b>:&nbsp; <a href={socialMediaLinks.youTube} target="_blank" alt="YouTube Link">{socialAccounts.youTube}</a></p>
                <p><b>Facebook</b>:&nbsp; <a href={socialMediaLinks.facebook} target="_blank" alt="Facebook Link">{socialAccounts.facebook}</a></p>
                <p><b>LinkedIn</b>:&nbsp; <a href={socialMediaLinks.linkedIn} target="_blank" alt="LinkedIn Link">{socialAccounts.linkedIn}</a></p>       
                <p><b>Twitter</b>:&nbsp; <a href={socialMediaLinks.twitter} target="_blank" alt="Twitter Link">{socialAccounts.twitter}</a></p>
              </div>
              <div className="mt80">
                <h4>Contact Us</h4>
                <p><b>Mailing</b>:&nbsp; {contactDetials.mailing}</p>
                <p><b>Phone</b>:&nbsp; {contactDetials.phone}</p>
                <p><b>Fax</b>:&nbsp; {contactDetials.fax}</p>
              </div>
            </div>
           }
        </div>       
      </div>
  )
}

export default PageHeader;