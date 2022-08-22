import React from 'react'
import Link from 'next/link'

const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>+1 304 445-9870</li>
                                <li><i className="fi flaticon-envelope"></i> info-dsfi@gmail.com</li>
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
                                <li><Link href="/DonatePage"><a className="theme-btn">Donate Now</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;