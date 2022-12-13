import ListItem from '../common/ListItem';
import WrappedImage from '../common/WrappedImage'
import { volunteerContext } from '../utils/contents';


const Intern = () =>  {
    const { volunteersNeeded } = volunteerContext;
    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return(
        <div>
            <div className="page-header-container">
                <WrappedImage imageUrl="/images/volunteer/intern_pic.png" />
                <div className="page-header-content">
                    DSF, Inc. authentically welcomes innovative, dynamic and passionate <b>interns</b> (<i>an advanced student or graduate usually in a professional field gaining supervised practical experience</i>) that fully understand the meaning of service and service leadership. Interns must have full understanding that dedicated and productive service is the foundation of non-profit organizations. All interns must be willing to serve our community with Faith, Hope and Love. Interns must be skilled in the area chosen to assist DSF, Inc.
                    <h4 className="volunteer-needed-list">Volunteers Needed</h4>
                    <ListItem items={volunteersNeeded.map((item) => item)}/>
                    <p>If you are interested in becoming an intern with DSF, Inc., please email your resume to&nbsp;
                        <a href="mailto:info.dsfinc@gmail.com" alt="email">info.DSF, Inc.nc@gmail.com</a>
                        &nbsp;and include the position you wish to apply for in the subject line. </p>
                </div>            
            </div>            
        </div>    
    );
    
}
   

    
    export default Intern;
          
          
          
          
