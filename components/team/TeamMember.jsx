import React from 'react';
import Link from 'next/link'

const TeamMember = ({name, position, imageUrl, socialLinks}) => {
  const uniqueNameID = name.split(" ").join("_");
  const memberHyperLink = `/TeamPage/#${uniqueNameID}`;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
        <div className="wpo-team-wrap">
            <div className="wpo-team-img">
                <img src={imageUrl} alt={name}/>
            </div>
            <div className="wpo-team-content">
                <div className="wpo-team-text-sub">
                    <h2><Link href={memberHyperLink}><a>{name}</a></Link> </h2>
                    <span>{position}</span>
                    <ul>
                        <Link href={memberHyperLink}><a className="team-bio-link">Get to know me</a></Link>
                    </ul>               
                </div>
            </div>
        </div>
    </div>
  );
}

export default TeamMember;