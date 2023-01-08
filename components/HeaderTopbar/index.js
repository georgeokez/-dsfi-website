import React from "react";
import Link from "next/link";
import {
  contactDetials,
  paymentLink,
  socialMediaLinks,
} from "../utils/contents";

const HeaderTopbar = () => {
  const { email, phone } = contactDetials;
  const hyperLinkContact = `tel:+1${phone}`;
  const hyperLinkEmail = `mailto:${email}`;
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="contact-intro">
              <ul>
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
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="contact-info">
              <ul>
                <li className="header-menu-socials">
                  <span>Follow Us: </span>
                  <a
                    href={socialMediaLinks.facebook}
                    target="_blank"
                    alt="Facebook Link"
                  >
                    <i className="ti-facebook"></i>
                  </a>
                  <a
                    href={socialMediaLinks.twitter}
                    target="_blank"
                    alt="Twitter Link"
                  >
                    <i className="ti-twitter-alt"></i>
                  </a>
                  <a
                    href={socialMediaLinks.instagram}
                    target="_blank"
                    alt="Instagram Link"
                  >
                    <i className="ti-instagram"></i>
                  </a>
                </li>
                <li>
                  <Link href="/ContactPage" title="">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a className="theme-btn" href={paymentLink} target="_blank">
                    Donate Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
