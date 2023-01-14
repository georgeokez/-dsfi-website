import Link from 'next/link';
import React from 'react';

const FooterCause = ({imageUrl, link, title, ClickHandler}) => {
  return (
    <div className="news-wrap">
        <div className="news-img">
        <img src={imageUrl} alt="Causes Image" />
        </div>
        <div className="news-text">
            <h3>
                <Link
                    onClick={ClickHandler}
                    href={link}
                >
                    <a>{title}</a>
                </Link>
            </h3>
        </div>
    </div>
  )
}

export default FooterCause;