import ListItem from '../common/ListItem';
import WrappedImage from '../common/WrappedImage'
import { volunteerContext } from '../utils/contents';


const Volunteer = () =>  {
    const { volunteersNeeded, paragraphTwo, formLink } = volunteerContext;
    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return(
        <div>
            <div className="page-header-container">
                <WrappedImage imageUrl="/images/volunteer/volunteer_pic.png" />
                <div className="page-header-content">
                      DSF, Inc. authentically welcomes innovative, dynamic and passionate <b>volunteers</b> (<i>a person who willingly accepts or expresses a willingness to commence a service</i>) that fully understand the meaning of service and service leadership. Volunteers must have full understanding that dedicated and productive service is the foundation of non-profit organizations. All volunteers must be willing to serve our community (Maryland and Washington, D.C.) with Faith, Hope and Love. Volunteers must be skilled in the area chosen to assist DSF, Inc.
                    <h4 className="volunteer-needed-list">Volunteers Needed</h4>
                    <ListItem items={volunteersNeeded.map((item) => item)}/>
                    <p>{paragraphTwo}</p><a href={formLink} target="_blank" alt="volunteer-link">Link to Volunter Form</a>
                </div>            
            </div>            
        </div>
        
    )
    
}
   

    
    export default Volunteer;
          
          
          
          
