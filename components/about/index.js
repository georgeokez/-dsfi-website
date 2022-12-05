import VideoModal from '../ModalVideo'
import Link from 'next/link'
import Header from './Header';
import ListItem from './ListItem';
import { visions, coreValues, missions } from '../utils/contents';

const About = () => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            {/* <Header title="Mission, Vision and Core Values" /> */}
                            <h4>Mission Statement</h4>
                            <p>
                                Serving our community with faith and love. Philippians 4:13 - I can do all 
                                things through Christ who strengthens me.
                            </p>
                            <h4>Vision</h4>
                            <p>
                                Our vision is to...
                                <ListItem items={visions} />
                            </p>
                            <h4>Core Values</h4>
                            <div className="core-values">
                                <ListItem items={coreValues.filter((value, index) => index < 3)}/>
                                <ListItem items={coreValues.filter((value, index) => index >= 3 & index < 6)}/>
                                <ListItem items={coreValues.filter((value, index) => index >= 6 & index < coreValues.length)}/>
                            </div>
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
                            <img src="images/hero/Mission_n_Vision.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;