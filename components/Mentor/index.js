import ListItem from '../common/ListItem';
import WrappedImage from '../common/WrappedImage'
import { volunteerContext } from '../utils/contents';


const Mentor = () =>  {
    const { mentorsNeeded } = volunteerContext;
    return(
        <div>
            <div className="page-header-container">
                <WrappedImage imageUrl="/images/volunteer/mentor.png" />
                <div className="page-header-content">
                    DSF, Inc. authentically welcomes innovative, dynamic and passionate <b>mentors</b> (<i>a person or friend who guides a less experienced person by building trust and modeling positive behaviors</i>) that fully understand the meaning of service and service leadership. Mentors must have full understanding that dedicated and productive service is the foundation of non-profit organizations. All mentors must be willing to serve our community (Maryland and Washington, D.C.) with faith, Hope and Love. Mentors must be skilled in the area chosen to assist DSF, Inc.
                    <h4 className="volunteer-needed-list">Volunteers Needed</h4>
                    <ListItem items={mentorsNeeded.map((item) => item)}/>
                    <p>If you are interested in becoming a mentor with DSF, Inc., please email your resume to&nbsp;
                        <a href="mailto:info.dsfinc@gmail.com" alt="email">info.DSF, Inc.nc@gmail.com</a>
                        &nbsp;and include the position you wish to apply for in the subject line. </p>
                </div>            
            </div>            
        </div>    
    );
    
}
   

    
    export default Mentor;
          
          
          
          
