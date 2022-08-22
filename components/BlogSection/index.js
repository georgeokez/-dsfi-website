import Link from 'next/link';
import BlogCard from './BlogCard';

const BlogSection = (props) => {
    
    return(
        <div className="wpo-blog-area section-padding">
            <div className="container hide-section">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <h2>Latest News</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-section">
                    <div className="blog-grids">
                        <BlogCard
                            tagTitle="Housing"
                            title="Getting a secure and safe environment for your family"
                            writer="Nashante"
                            imageUrl="images/case/social-Housing.jpeg"
                            commentCount={4}
                        />
                        <BlogCard
                            tagTitle="Legal"
                            title="Knowing how to get legal help and assistance"
                            writer="Abraham"
                            imageUrl="images/case/legal-assistance.png"
                            commentCount={7}
                        />
                        <BlogCard
                            tagTitle="Mental Health"
                            title="The importance of mental health awareness"
                            writer="Angel"
                            imageUrl="images/case/mental-health.png"
                            commentCount={12}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;