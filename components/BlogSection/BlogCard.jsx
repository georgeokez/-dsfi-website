import React from 'react';
import Link from 'next/link';

const BlogCard = ({ tagTitle, title, writer, imageUrl, commentCount }) => {
  return (
    <div className="grid">
        <div className="entry-media">
            <img src={imageUrl} alt={title}/>
            <div className="tag">{tagTitle}</div>
        </div>
        <div className="entry-details">
            <h3><Link href="/BlogDetails">{title}</Link></h3>
            <ul>
                <li>
                    <i className="ti-user"></i>
                    By: {writer}</li>
                <li>
                    <i className="ti-comment-alt"></i>
                    Comments (<span className="comment">{commentCount}</span>)
                </li>
            </ul>
        </div>
    </div>
  );
}

export default BlogCard;