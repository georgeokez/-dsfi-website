import Link from 'next/link'
import { paymentLink } from '../utils/contents';

const Hero2 = (props) => {

    return(
        <section className="hero hero-style-1">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-6 slide-caption">
                                <div className="slide-title">
                                    <h2>We Believe in <span>promoting</span></h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>Individuals and families to speak out on their circumstances and/or challanges</p>
                                    <p>And we provide case management services to communities that share in our mission and vision to help Individuals and families.</p>
                                </div>
                                <div className="btns">
                                    <a className="theme-btn" href={paymentLink} target="_blank">Donate Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-vec">
                    </div>  
                </div>
            </div>
    </section>
    )
}

export default Hero2;