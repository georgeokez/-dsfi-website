import React from "react";
import Link from "next/link";
import HeaderTopbar from "../HeaderTopbar";
import MobileMenu from "../../components/MobileMenu";

const Header = () => {
  return (
    <div className="middle-header header-style-3">
      <HeaderTopbar />
      <div className="container">
        <div className="header-content">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
              <div className="logo">
                <Link href="/" title="">
                  <a>
                    {/* <img src='images/dsfi-logo-no-bg.png' height={80} alt=""/> */}
                    <img
                      src="images/logo/dsf_new_logo.png"
                      height={80}
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 d-lg-block d-none menu-bar-padding">
              <nav>
                <ul>
                  <li>
                    <Link className="active" href="/" title="home page">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/AboutPage" title="about page">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/Partnership" title="partnership">
                      Partnership
                    </Link>
                  </li>
                  <li>
                    <Link href="/TeamPage" title="team page">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/HousingAssistance" title="resources">
                      Resources
                    </Link>
                    <ul>
                      <li>
                        <Link
                          href="/HousingAssistance"
                          title="housing assistance"
                        >
                          Housing Assistance
                        </Link>
                      </li>
                      <li>
                        <Link href="/LegalAssistance" title="legal assistance">
                          Legal Assistance
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/VolunteerPage" title="volunteer page">
                      Volunteer
                    </Link>
                    <ul>
                      <li>
                        <Link href="/VolunteerPage" title="volunteer page">
                          Volunteer
                        </Link>
                      </li>
                      <li>
                        <Link href="/Mentor" title="mentor">
                          Mentor
                        </Link>
                      </li>
                      <li>
                        <Link href="/Intern" title="intern">
                          Intern
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <MobileMenu />
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
