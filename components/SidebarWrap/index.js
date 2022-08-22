import Link from 'next/link'


const SidebarWrap = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="col col-lg-4 col-12">
            <div className="wpo-blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/social-housing-80x80.jpeg' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link href="/BlogDetails">Getting a secure and safe environment for your family</Link></h4>
                                <span className="date">20 Feb 2022</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/legal-assistance-80x80.png' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link href="/BlogDetails">Knowing how to get legal help and assistance</Link></h4>
                                <span className="date">07 Apr 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/mental-health-80x80.png' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link href="/BlogDetails">The importance of mental health awareness</Link></h4>
                                <span className="date">16 May 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link href="/BlogDetails">Donations</Link></li>
                        <li><Link href="/BlogDetails">Charity</Link></li>
                        <li><Link href="/BlogDetails">Help</Link></li>
                        <li><Link href="/BlogDetails">Non Profit</Link></li>
                        <li><Link href="/BlogDetails">Poor People</Link></li>
                        <li><Link href="/BlogDetails">Helping Hand</Link></li>
                        <li><Link href="/BlogDetails">Video</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default SidebarWrap;
