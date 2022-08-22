import VideoModal from '../ModalVideo'
import Link from 'next/link'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <h2>Our Vision and Mission</h2>
                            </div>
                            <h3>Vision</h3>
                            <p>
                                Our vision is to be the leading faith-based non-profit organization in the Washington, D.C. metropolitan area providing communal 
                                resources and services supporting individuals and families suffering/suffered from domestic violence. To be the leading non-profit 
                                organization promoting and supporting mental health, mental awareness, enrichment and conflict resolution, while promoting self-love, 
                                self-care and self-awareness through enrichment programs for individuals and families. To be the leading non-profit organization providing 
                                the necessary tools needed to discover individuals’ identity. To be the leading non-profit organization to assist individuals and families in 
                                developing major foundations that will lead them to living a healthier and stable lifestyle. 
                            </p>
                            <h3>Mission</h3>
                            <p>
                                To provide assistance, resources, tools and enrichment to individuals and families that require assistance in healing their lives, enhancing 
                                their lives, self-esteem and self-confidence building, self-love and self-care management, encouragement to speak out, character building and 
                                foundational development that will assist in enhancing their lives.
                            </p>
                            <div className="btns">
                                <Link href="/DonatePage">
                                        <a  className="theme-btn" onClick={ClickHandler}>Donate Now</a>
                                </Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            {/* <img src='images/about3.png' alt=""/> */}
                            <img src="images/hero/hero-pic-3.jpeg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;