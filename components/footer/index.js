import React from 'react';
import Link from 'next/link';
import Newsletter from '../Newsletter';
import { missionStatement, contactDetials, socialMediaLinks } from '../utils/contents';

const Footer = () =>{
  const { email, mailing, phone } = contactDetials;

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
                            <p>{missionStatement}</p>
                            <ul>
                                <li><a href={socialMediaLinks.facebook} target="_blank" alt="Facebook Link"><i className="ti-facebook"></i></a></li>
                                <li><a href={socialMediaLinks.twitter} target="_blank" alt="Twitter Link"><i className="ti-twitter-alt"></i></a></li>
                                <li><a href={socialMediaLinks.instagram} target="_blank" alt="Instagram Link"><i className="ti-instagram"></i></a></li>
                                <li><a href={socialMediaLinks.youTube} target="_blank" alt="YouTube Link"><i className="ti-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget resource-widget" style={{paddingTop: '15px'}}>
                            <div className="widget-title">
                                <h3>Our Causes</h3>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src='/images/footer/mental_health_small.jpeg' alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} href="/CaseSinglePage/MentalHealthAwareness"><a>Mental Health Awareness</a></Link></h3>
                                </div>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src='/images/footer/domestic_violence_smaller.png' alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} href="/CaseSinglePage/DomesticViolenceAwareness"><a>Domestic Violence Awareness</a></Link></h3>
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
                                <li><Link onClick={ClickHandler} href="/CaseSinglePage/MentalHealthAwareness"><a>Our Causes</a></Link></li>
                                <li><Link onClick={ClickHandler} href="/Partnership"><a>Partnership</a></Link></li>
                                <li><Link onClick={ClickHandler} href="/VolunteerPage"><a>Volunteer</a></Link></li>
                                <li><Link onClick={ClickHandler} href="/ContactPage"><a>Contact Us</a></Link></li>
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
                                    <li><i className="fi flaticon-pin"></i>{mailing}</li>
                                    <li><i className="fi flaticon-call"></i>{phone}</li>
                                    <li><i className="fi flaticon-envelope"></i>{email}</li>
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