import React from 'react'
import Link from 'next/link'
import Newsletter from '../Newsletter'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <Newsletter/>
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src='images/dsfi_logo_white_text.png' alt=""/>
                            </div>
                            <p>Serving our community with faith and love. Philippians 4:13 - I can do all things through Christ who strengthens me.</p>
                            <ul>
                                <li><Link onClick={ClickHandler} href="/"><a><i className="ti-facebook"></i></a></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><a><i className="ti-twitter-alt"></i></a></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><a><i className="ti-instagram"></i></a></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><a><i className="ti-google"></i></a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget resource-widget" style={{paddingTop: '15px'}}>
                            <div className="widget-title">
                                <h3>Top News</h3>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src='images/footer/mental_health_small.jpeg' alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} href="/BlogPage"><a>Importance of mental health awareness</a></Link></h3>
                                    <span>16 May, 2022</span>
                                </div>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src='images/footer/legal-assistance.png' alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} href="/BlogPage"><a>Knowing how to get Legal Help</a></Link></h3>
                                    <span>18 Jun, 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget" style={{paddingTop: '15px'}}>
                            <div className="widget-title">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} href="/AboutPage"><a>About Us</a></Link></li>
                                <li><Link onClick={ClickHandler} href="/CasePage"><a>Our Causes</a></Link></li>
                                <li><Link onClick={ClickHandler} href="/CasePage"><a>Our Mission</a></Link></li>
                                <li><Link onClick={ClickHandler} href="/ContactPage"><a>Contact Us</a></Link></li>
                                <li><Link onClick={ClickHandler} href="/EventPage"><a>Our Event</a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <div className="widget market-widget wpo-service-link-widget" style={{paddingTop: '15px'}}>
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <p>In search of assistance, healing, resources, tools, self care and self love management, reach out.</p>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>28 Park, Washington, D.C., USA</li>
                                    <li><i className="fi flaticon-call"></i>+1 304 445-9870</li>
                                    <li><i className="fi flaticon-envelope"></i>info-dsfi@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright">&copy; 2022 Divine Service and Foundation Inc. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;