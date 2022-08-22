const CounterSection = (props) => {
    return(
        <div className={`wpo-counter-area ${props.countclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-counter-grids">
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="140">140</span>+</h2>
                                </div>
                                <p>Donation</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="35">35</span>+</h2>
                                </div>
                                <p>Fund Raised</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="85">85</span>+</h2>
                                </div>
                                <p>Volunteers</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="25">25</span>+</h2>
                                </div>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterSection;