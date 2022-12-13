
const Newsletter = (props) => {
    return(
        <section className="wpo-news-letter-section">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 offset-lg-3 col-sm-8 offset-md-2">
                        <div className="wpo-newsletter">
                            <h3>Follow us For further information</h3>
                            <p>Please follow DSF, INC. on all social media platforms for updates on news and other activities.</p>
                            {/* <div className="wpo-newsletter-form">
                                <form onSubmit={SubmitHandler}>
                                    <div>
                                        <input type="text" placeholder="Enter Your Email" className="form-control"/>
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;