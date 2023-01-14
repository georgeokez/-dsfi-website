import React from "react";
import Link from "next/link";
import Newsletter from "../Newsletter";
import {
  missionStatement,
  contactDetials,
  socialMediaLinks,
} from "../utils/contents";
import FooterCause from "./FooterCause";

const Footer = () => {
  const { email, mailing, phone } = contactDetials;
  const hyperLinkContact = `tel:+1${phone}`;
  const hyperLinkEmail = `mailto:${email}`;
  const footerYear = new Date().getFullYear();

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer">
      <Newsletter />
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  {/* <img src='images/dsfi_logo_white_text.png' alt=""/> */}
                  <Link href="/">
                    <a>
                      <img
                        src="/images/logo/dsf_new_logo.png"
                        alt="logo image"
                      />
                    </a>
                  </Link>
                </div>
                <p>{missionStatement}</p>
                <ul>
                  <li>
                    <a
                      href={socialMediaLinks.facebook}
                      target="_blank"
                      alt="Facebook Link"
                    >
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={socialMediaLinks.twitter}
                      target="_blank"
                      alt="Twitter Link"
                    >
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={socialMediaLinks.instagram}
                      target="_blank"
                      alt="Instagram Link"
                    >
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={socialMediaLinks.youTube}
                      target="_blank"
                      alt="YouTube Link"
                    >
                      <i className="ti-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div
                className="widget link-widget resource-widget"
                style={{ paddingTop: "15px" }}
              >
                <div className="widget-title">
                  <h3>Our Causes</h3>
                </div>
                <FooterCause
                  imageUrl="/images/footer/mental_health_small.jpeg"
                  link="/CaseSinglePage/DomesticViolenceAwareness"
                  title="Mental Health Awareness"
                  ClickHandler={ClickHandler}
                />
                <FooterCause
                  imageUrl="/images/footer/domestic_violence_smaller.png"
                  link="/CaseSinglePage/MentalHealthAwareness"
                  title="Domestic Violence Awareness"
                  ClickHandler={ClickHandler}
                />
                <FooterCause
                  imageUrl="/images/footer/youth_empowerment_smaller.png"
                  link="/CaseSinglePage/YouthEmpowerment"
                  title="Youth Empowerment"
                  ClickHandler={ClickHandler}
                />
                <FooterCause
                  imageUrl="/images/footer/conflict_resolution_smaller.png"
                  link="/CaseSinglePage/ConflictResolutionAwareness"
                  title="Conflict Resolution Awareness"
                  ClickHandler={ClickHandler}
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
              <div
                className="widget link-widget"
                style={{ paddingTop: "15px" }}
              >
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} href="/AboutPage">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={ClickHandler}
                      href="/CaseSinglePage/MentalHealthAwareness"
                    >
                      <a>Our Causes</a>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/Partnership">
                      <a>Partnership</a>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/VolunteerPage">
                      <a>Volunteer</a>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/ContactPage">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
              <div
                className="widget market-widget wpo-service-link-widget"
                style={{ paddingTop: "15px" }}
              >
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <p>
                  In search of assistance, healing, resources, tools, self care
                  and self love management, reach out.
                </p>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-pin"></i>
                      {mailing}
                    </li>
                    <li>
                      <i className="fi flaticon-call"></i>
                      <a href={hyperLinkContact}>{phone}</a>
                    </li>
                    <li>
                      <i className="fi flaticon-envelope"></i>
                      <a href={hyperLinkEmail}>{email}</a>
                    </li>
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
              <p className="copyright">
                &copy; {footerYear} Divine Service and Foundation Inc. All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
