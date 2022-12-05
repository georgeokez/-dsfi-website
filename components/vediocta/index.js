import VideoModal from '../../components/ModalVideo'

const VedioCta = () => {
    return(
        <div className="wpo-about-video-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-about-video-item">
                            <div className="wpo-about-video-img">
                                {/* <img src='images/hero/hero-pic-2.jpeg' alt=""/> */}
                                <img src='images/hero/about_bg_dsfi.png' alt=""/>
                                <div className="entry-media video-holder video-btn2">
                                    <VideoModal/>
                                </div>
                            </div>
                            <h2>See what we do for <span>individuals and families</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VedioCta;