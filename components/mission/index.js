
const Mission = (props) => {
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <h2>We Are On A Mission To</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-5">
                                    <img src='images/mission/icon1.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Enhance Lives</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-6">
                                    <img src='images/mission/icon4.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Heal People</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img src='images/mission/icon3.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Build Self Esteem</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src='images/mission/self-love-icon.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Promote Self Love</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;