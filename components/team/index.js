import Link from 'next/link'
import TeamMember from './TeamMember';

const TeamSection = (props) => {
    return(
        <div className="wpo-team-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <h2>Meet Our Team</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <TeamMember name="Angel Akinwale" position="Founder, President & CEO" imageUrl="images/team/Angel_Akinwale.png" />
                    <TeamMember name="Abraham Akinwale" position="Vise President & Treasurer" imageUrl="images/team/Abraham_Akinwale.png" />
                    <TeamMember name="Caryne Akinwande" position="Director" imageUrl="images/team/team-3.jpg" />
                </div>
            </div>
        </div>
    )
}

export default TeamSection;