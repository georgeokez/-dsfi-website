import React from 'react';
import Link from 'next/link';
import { contactDetials, paymentLink } from '../utils/contents';

const HeaderTopbar = () => {
    const { email, phone } = contactDetials;
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>{phone}</li>
                                <li><i className="fi flaticon-envelope"></i>{email}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li className="header-menu-socials">
                                    <span>Follow Us: </span>
                                    <Link href="/"><a><i className="ti-facebook"></i></a></Link>
                                    <Link href="/"><a><i className="ti-twitter-alt"></i></a></Link>
                                    <Link href="/"><a><i className="ti-instagram"></i></a></Link>
                                </li>
                                <li><Link href="/ContactPage" title="">Contact Us</Link></li>                              
                                <li><a className="theme-btn" href={paymentLink} target="_blank">Donate Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;