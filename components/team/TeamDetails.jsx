import React from 'react';
import { addon1, addon2, addon3, addon4 } from '../../components/utils/contents';
import { teambio } from '../../components/utils/teamBio';
import TeamContent from './TeamContent';

const { member1, member2, member3 } = teambio;

const generateID = (name) => {
    return name.split(" ").join("_");
}

const TeamDetails = () => {

    return (
        <div className="addon-wrapper">
            <div className="addon-wrapper-item-white" id={generateID(member1.name)}>
                <div className="about-add-ons-container">
                    <div className="about-add-ons-item">
                        <img src={member1.picture} height="400" width="600" alt=""/> 
                        <TeamContent memberBio={member1}/>
                    </div>
                </div>
            </div> 
            <div className="addon-wrapper-item-gray" id={generateID(member2.name)}>
                <div className="about-add-ons-container">
                    <div className="about-add-ons-item">
                    <TeamContent memberBio={member2}/>
                        <img src= {member2.picture} height="400" width="500" alt=""/> 
                    </div>
                </div>
            </div>   
            <div className="addon-wrapper-item-white" id={generateID(member3.name)}>
                <div className="about-add-ons-container">
                    <div className="about-add-ons-item">
                        <img src={member3.picture} height="500" width="500" alt=""/> 
                        <TeamContent memberBio={member3}/>
                    </div>
                </div>
            </div>    
        </div>
      )
}

export default TeamDetails;
