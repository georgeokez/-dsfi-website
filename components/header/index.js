import React from 'react'
import Link from 'next/link'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'

const Header = () => {
    return(	
	<div className="middle-header header-style-3">
        <HeaderTopbar/>
        <div className="container">
            <div className="header-content">
            <div className="row" style={{justifyContent: "space-between"}}>
                <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                    <div className="logo">
                        <Link href="/" title="">
                           <a>
                                <img src='images/dsfi-logo-no-bg.png' height={80} alt=""/>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-9 d-lg-block d-none menu-bar-padding">
                    <nav>
                        <ul>
                            <li><Link className="active" href="/" title="">Home</Link></li>
                            <li><Link href="/AboutPage" title="">About</Link></li>
                            <li><Link href="/Partnership" title="">Partnership</Link></li>
                            <li><Link href="/Resources" title="">Resources</Link>
                                <ul>
                                    <li><Link href="/Housing Assistance" title="">Housing Assistance</Link></li>
                                    <li><Link href="/Legal Assistance" title="">Legal Assistance</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/EventPage" title="">Event</Link>
                                <ul>
                                    <li><Link href="/Events" title="">Event</Link></li>
                                    <li><Link href="/News" title="">News</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/VolunteerPage" title="">Volunteer</Link>
                                <ul>
                                    <li><Link href="/VolunteerPage" title="">Volunteer</Link></li>
                                    <li><Link href="/Mentor" title="">Mentor</Link></li> 
                                    <li><Link href="/Intern" title="">Intern</Link></li>   
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-2 col-sm-2 col-2">
                    <MobileMenu/>
                </div>
            </div>
               
                <div className="clearfix"></div>
            </div>
            
        </div>
    </div>
    )
}

export default Header;